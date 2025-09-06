'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useMemo } from "react";

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
          staleTime: 5 * 60 * 1000,
        },
        mutations: {
          onError: (error: Error) => {
            console.log("Query error:", error);
          },
        },
      },
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
