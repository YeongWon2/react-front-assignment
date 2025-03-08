import { Navigate } from 'react-router-dom';

import { FormPage } from '@/pages/ui';

export const routes = [
  { path: '/', element: <Navigate to="/form" replace /> },
  { path: '/form', element: <FormPage /> },
];
