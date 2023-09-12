'use client';
import AuthProvider from '@/lib/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';

const Provider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Provider;
