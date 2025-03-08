import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '@/app/layout/model';

import { NotFoundPage } from '@/pages/ui';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
