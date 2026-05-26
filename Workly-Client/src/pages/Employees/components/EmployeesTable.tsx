import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { CustomTable } from '@/components/CustomTable';

import { employees } from '../data/employees';

export function EmployeesTable() {
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
    },
  ];

  return (
    <CustomTable data={employees} columns={columns} showRowNumber pagination />
  );
}
