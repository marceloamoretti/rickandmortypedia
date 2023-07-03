import React, { memo, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,
      notifyOnChangeProps: 'all',
      retry: false,
    },
  },
});

export const QueryProvider = memo<{ children: ReactNode }>(({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
));
