import { Avatar, AvatarImage } from '@/components/ui/avatar';
import type { Employee } from '../types/employee';

interface EmployeeViewProps {
  employee: Employee;
}

export function EmployeeView({ employee }: EmployeeViewProps) {
  return (
    <div className="flex gap-8">
      <Avatar className="size-32 border-4 border-white/10 shadow-xl">
        <AvatarImage src={employee.avatar} />
      </Avatar>

      <div className="grid flex-1 grid-cols-2 gap-6">
        <InfoField label="Name" value={employee.name} />

        <InfoField label="Email" value={employee.email} />

        <InfoField label="Phone" value={employee.phone} />

        <InfoField label="Age" value={employee.age} />

        <InfoField label="Department" value={employee.department} />

        <InfoField label="Position" value={employee.position} />

        <InfoField label="Onboarding Date" value={employee.onboardingDate} />

        <InfoField label="Salary" value={`$${employee.salary}`} />
      </div>
    </div>
  );
}

interface InfoFieldProps {
  label: string;
  value: string | number;
}

function InfoField({ label, value }: InfoFieldProps) {
  return (
    <div className="space-y-1">
      <p className="text-muted-foreground text-sm">{label}</p>

      <p className="font-medium">{value}</p>
    </div>
  );
}
