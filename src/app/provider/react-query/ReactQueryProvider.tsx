import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IReactQueryProviderProps {
  children: ReactNode;
}

function ReactQueryProvider({ children }: IReactQueryProviderProps) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
