import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  Users,
  WalletCards,
} from 'lucide-react';

export const navigationRoutes = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/',
    component: 'Dashboard',
  },

  {
    title: 'Employees',
    icon: Users,
    path: '/employees',
    component: 'Employees',
  },

  {
    title: 'Attendance',
    icon: CalendarDays,
    path: '/attendance',
    component: 'Attendance',
  },

  {
    title: 'Payroll',
    icon: WalletCards,
    path: '/payroll',
    component: 'Payroll',
  },

  {
    title: 'Settings',
    icon: Settings,
    path: '/settings',
    component: 'Settings',
  },
];
