import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';

import { Employees } from '@/pages/Employees/Employees';

export const router = createBrowserRouter([
  {
    path: '/',

    element: <App />,

    children: [
      {
        index: true,
        element: <div>Dashboard Page</div>,
      },

      {
        path: 'employees',
        element: <Employees />,
      },
    ],
  },
]);
