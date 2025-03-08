import { Navigate } from 'react-router-dom';

import { FormPage, HomePage } from '@/pages';

export const routes = [
  { path: '/', element: <Navigate to="/form" replace /> },
  { path: '/form', element: <HomePage /> },
  { path: '/form/:formId', element: <FormPage /> },
];
