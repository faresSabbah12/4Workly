import { EmployeesTable } from './components/EmployeesTable';

export function Employees() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Employees</h1>

        <p className="text-muted-foreground mt-1">
          Manage all employees within the organization.
        </p>
      </div>

      <EmployeesTable />
    </div>
  );
}
