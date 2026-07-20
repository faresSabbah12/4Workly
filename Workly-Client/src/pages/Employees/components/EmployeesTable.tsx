import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CustomTable } from '@/components/CustomTable';

// import { employees } from '../data/employees';
import { employees as initialEmployees } from '../data/employees';
import { useState } from 'react';
// import { EmployeeDetailsDialog } from './EmployeeDetailsDialog';
import { Pencil, Trash2 } from 'lucide-react';
import { ModalVariant } from '@/components/types/modal.types';
import { Modal } from '@/components/Modal';
import { EmployeeEditForm } from './EmployeeEditForm';
import { EmployeeView } from './EmployeeView';

export function EmployeesTable() {
  const [selectedEmployee, setSelectedEmployee] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState(initialEmployees);
  const [mode, setMode] = useState<'view' | 'edit'>('view');

  // DELETE LOGIC
  const handleDelete = (employeeId: number) => {
    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== employeeId),
    );
  };

  // EDIT LOGIC
  const handleEdit = (employee: any) => {
    setSelectedEmployee(employee);
    setMode('edit');
    setOpen(true);
  };

  // SAVE
  const handleSave = (updatedEmployee: any) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );

    setSelectedEmployee(updatedEmployee);

    setOpen(false);
  };

  const columns = [
    {
      key: 'avatar',
      title: 'Avatar',
      render: (employee: any) => (
        <Avatar className="size-11">
          <AvatarImage src={employee.avatar} />
        </Avatar>
      ),
    },

    {
      key: 'name',
      title: 'Name',
    },

    {
      key: 'department',
      title: 'Department',
    },

    {
      key: 'position',
      title: 'Position',
    },

    {
      key: 'onboardingDate',
      title: 'Onboarding Date',
    },

    {
      key: 'age',
      title: 'Age',
    },

    {
      key: 'phone',
      title: 'Phone',
    },

    {
      key: 'email',
      title: 'Email',
      truncate: true,
    },

    {
      key: 'actions',
      title: 'Actions',

      render: (employee: any) => (
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();

              handleEdit(employee);
            }}
            className="
          text-blue-500
          transition-colors
          hover:text-blue-400
        "
          >
            <Pencil className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();

              handleDelete(employee.id);
            }}
            className="
          text-red-500
          transition-colors
          hover:text-red-400
        "
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <CustomTable
        data={employees}
        columns={columns}
        showRowNumber
        pagination
        onRowClick={(employee) => {
          setSelectedEmployee(employee);
          setMode('view');
          setOpen(true);
        }}
      />

      <Modal
        open={open}
        onOpenChange={setOpen}
        title={mode === 'view' ? 'Employee Details' : 'Edit Employee'}
        variant={ModalVariant.INFO}
      >
        {selectedEmployee &&
          (mode === 'view' ? (
            <EmployeeView employee={selectedEmployee} />
          ) : (
            <EmployeeEditForm
              employee={selectedEmployee}
              onSubmit={handleSave}
            />
          ))}
      </Modal>
    </>
  );
}
