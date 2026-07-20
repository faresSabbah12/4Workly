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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from './ui/tooltip';

interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (row: T, index: number) => React.ReactNode;
  truncate?: boolean;
}

interface CustomTableProps<T> {
  data: T[];
  columns: Column<T>[];
  showRowNumber?: boolean;
  pagination?: boolean;
  pageSize?: number;
  onRowClick?: (row: T) => void;
}

export function CustomTable<T>({
  data,
  columns,
  showRowNumber = false,
  pagination = false,
  pageSize = 10,
  onRowClick,
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
    <TooltipProvider>
      <div className="animate-page bg-card overflow-x-auto rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
        {/* <Table> */}
        <Table className="w-full table-fixed">
          {/* <TableHeader className="bg-muted/50"> */}
          <TableHeader className="bg-white/5 backdrop-blur-xl">
            <TableRow>
              {showRowNumber && <TableHead className="w-[80px]">#</TableHead>}

              {columns.map((column) => (
                <TableHead
                  key={column.title}
                  className="
                  h-16
                  px-6
                  text-sm
                  font-semibold
                  tracking-wide
                  text-muted-foreground
                "
                >
                  {column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow
                key={index}
                onClick={() => onRowClick?.(row)}
                className={`
                animate-table-row
                border-white/5
                transition-all
                duration-200
                hover:bg-white/5
                ${onRowClick ? 'cursor-pointer' : ''}
              `}
              >
                {showRowNumber && (
                  <TableCell className="px-5 text-sm font-semibold text-muted-foreground">
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                )}

                {columns.map((column) => {
                  const value = String(row[column.key as keyof T]);

                  return (
                    <TableCell
                      key={String(column.key)}
                      className="max-w-[180px] px-5 py-6 text-sm font-medium"
                    >
                      {column.render ? (
                        column.render(row, index)
                      ) : column.truncate ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="truncate">{value}</div>
                          </TooltipTrigger>

                          <TooltipContent>{value}</TooltipContent>
                        </Tooltip>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {pagination && (
          <div
            className="
            bg-white/5
            flex items-center
            justify-between
            border-t
            border-white/10
            px-6
            py-4
            backdrop-blur-xl
          "
          >
            <div className="text-muted-foreground text-sm">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="
                  animate-soft
                  hover:bg-primary/10
                  hover:text-primary
                  rounded-xl
                  transition-all
                "
              >
                {'<<'}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="
                animate-soft
                hover:bg-primary/10
                hover:text-primary
                rounded-xl
                transition-all
              "
              >
                {'<'}
              </Button>

              <div
                className="
                bg-primary/10
                text-primary
                flex h-7 min-w-[50px]
                items-center justify-center
                rounded-xl
                border border-primary/20
                px-4
                text-sm
                font-semibold
              "
              >
                {currentPage}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
              >
                {'>'}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
              >
                {'>>'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
