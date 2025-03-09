import { Navigate } from 'react-router-dom';

import { CleaningFormPage, EnglishLessonFormPage, HomePage } from '@/pages';

export const routes = [
  { path: '/', element: <Navigate to="/form" replace /> },
  { path: '/form', element: <HomePage /> },
  { path: '/form/1', element: <CleaningFormPage /> },
  { path: '/form/2', element: <EnglishLessonFormPage /> },
];
