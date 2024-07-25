import React, { ReactNode } from 'react';
import { ToastProvider } from './toast/toast';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ToastProvider>{children}</ToastProvider>
  );
}
