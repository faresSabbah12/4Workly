import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/input';
import { employeeSchema } from '../schemas/employeeSchema';
import type { EmployeeFormValues } from '../types/employeeForm.types';
import { useState } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface EmployeeEditFormProps {
  employee: EmployeeFormValues;
  onSubmit: (data: EmployeeFormValues) => void;
}

export function EmployeeEditForm({
  employee,
  onSubmit,
}: EmployeeEditFormProps) {
  const [avatarPreview, setAvatarPreview] = useState(employee.avatar);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormValues>({
    resolver: yupResolver(employeeSchema),

    mode: 'onChange',

    defaultValues: employee,
  });

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setAvatarPreview(imageUrl);
  };

  const handleRemoveAvatar = () => {
    setAvatarPreview('');
  };

  return (
    <form
      id="employee-edit-form"
      onSubmit={handleSubmit((data) =>
        onSubmit({
          ...data,
          avatar: avatarPreview,
        }),
      )}
      className="grid grid-cols-2 gap-5"
    >
      <div className="col-span-2 mb-6 flex flex-col items-center gap-4">
        <Avatar className="size-28 border-4 border-white/10 shadow-xl">
          <AvatarImage src={avatarPreview} />
        </Avatar>

        <div className="flex gap-3">
          <Button type="button" variant="outline" asChild>
            <label className="cursor-pointer">
              Change Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleRemoveAvatar}
          >
            Remove Photo
          </Button>
        </div>
      </div>

      <FormField label="Name" error={errors.name?.message}>
        <Input {...register('name')} />
      </FormField>

      <FormField label="Email" error={errors.email?.message}>
        <Input {...register('email')} />
      </FormField>

      <FormField label="Phone" error={errors.phone?.message}>
        <Input {...register('phone')} />
      </FormField>

      <FormField label="Age" error={errors.age?.message}>
        <Input type="number" {...register('age')} />
      </FormField>

      <FormField label="Department" error={errors.department?.message}>
        <Input {...register('department')} />
      </FormField>

      <FormField label="Position" error={errors.position?.message}>
        <Input {...register('position')} />
      </FormField>

      <FormField label="Onboarding Date" error={errors.onboardingDate?.message}>
        <Input type="date" {...register('onboardingDate')} />
      </FormField>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-muted-foreground mb-3 block text-sm">
        {label}
      </label>

      {children}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
