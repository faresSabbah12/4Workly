import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface EmployeeDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee: any | null;
}

export function EmployeeDetailsDialog({
  open,
  onOpenChange,
  employee,
}: EmployeeDetailsDialogProps) {
  if (!employee) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
            border-border
            bg-card
            text-card-foreground
            shadow-2x1
            sm:max-w-[800px]
        "
      >
        <DialogHeader>
          <DialogTitle>Employee Details</DialogTitle>
        </DialogHeader>

        <div className="flex gap-8">
          <Avatar className="h-32 w-32 border-4 border-white/10 shadow-xl">
            <AvatarImage src={employee.avatar} />
          </Avatar>

          <div className="grid flex-1 grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Name</p>

              <p className="font-medium">{employee.name}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Email</p>

              <p className="font-medium">{employee.email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Phone</p>

              <p className="font-medium">{employee.phone}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Age</p>

              <p className="font-medium">{employee.age}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Department</p>

              <p className="font-medium">{employee.department}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Position</p>

              <p className="font-medium">{employee.position}</p>
            </div>

            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Onboarding Date</p>

              <p className="font-medium">{employee.onboardingDate}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
