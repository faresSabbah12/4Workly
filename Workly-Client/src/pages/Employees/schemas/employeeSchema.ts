import * as yup from 'yup';

export const employeeSchema = yup.object({
  avatar: yup.string().optional(),

  name: yup.string().required('Name is required'),

  email: yup.string().email('Invalid email').required('Email is required'),

  phone: yup.string().required('Phone is required'),

  department: yup.string().required('Department is required'),

  position: yup.string().required('Position is required'),

  age: yup.number().required('Age is required'),

  onboardingDate: yup.string().required('Onboarding Date is required'),
});
