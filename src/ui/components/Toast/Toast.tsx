import React from 'react';
import { ToastType } from '../../providers/toast/types';

interface ToastProps {
  type: ToastType;
  message: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const toastStyle = {
    success: 'bg-green-500 text-white p-4 rounded shadow',
    error: 'bg-red-500 text-white p-4 rounded shadow',
  };

  return (
    <div className={`${toastStyle[type]} flex items-center`}>
      {message}
    </div>
  );
};
