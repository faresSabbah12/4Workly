import { useMemo, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';

interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (row: T, index: number) => React.ReactNode;
}

interface CustomTableProps<T> {
  data: T[];
  columns: Column<T>[];
  showRowNumber?: boolean;
  pagination?: boolean;
  pageSize?: number;
}

export function CustomTable<T>({
  data,
  columns,
  showRowNumber = false,
  pagination = false,
  pageSize = 10,
}: CustomTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = useMemo(() => {
    if (!pagination) {
      return data;
    }

    const startIndex = (currentPage - 1) * pageSize;

    return data.slice(startIndex, startIndex + pageSize);
  }, [currentPage, data, pagination, pageSize]);

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="overflow-hidden rounded-2xl border">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            {showRowNumber && <TableHead className="w-[80px]">#</TableHead>}

            {columns.map((column) => (
              <TableHead key={column.title}>{column.title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={index}>
              {showRowNumber && (
                <TableCell className="font-medium">
                  {(currentPage - 1) * pageSize + index + 1}
                </TableCell>
              )}

              {columns.map((column) => (
                <TableCell key={String(column.key)}>
                  {column.render
                    ? column.render(row, index)
                    : String(row[column.key as keyof T])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pagination && (
        <div className="bg-background flex items-center justify-between border-t px-6 py-4">
          <div className="text-muted-foreground text-sm">
            Page {currentPage} of {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToFirstPage}
              disabled={currentPage === 1}
            >
              {'<<'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              {'<'}
            </Button>

            <div className="bg-muted flex h-9 min-w-[50px] items-center justify-center rounded-md px-4 text-sm font-medium">
              {currentPage}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
            >
              {'>>'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
