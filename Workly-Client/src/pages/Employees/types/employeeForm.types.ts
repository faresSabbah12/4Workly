import type { InferType } from 'yup';
import { employeeSchema } from '../schemas/employeeSchema';

export type EmployeeFormValues = InferType<typeof employeeSchema>;
