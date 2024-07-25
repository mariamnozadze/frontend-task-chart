import React, { createContext, useCallback, useContext, useState } from 'react';
import { ToastType, ToastInput } from './types';
import { Toast } from '../../components/Toast';

interface ToastContextType {
  renderToast: (type: ToastType, message: React.ReactNode) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastInput[]>([]);

  const renderToast = useCallback((type: ToastType, message: React.ReactNode) => {
    setToasts(prevToasts => [...prevToasts, { type, body: message }]);
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.slice(1));
    }, 3000); // Remove toast after 3 seconds
  }, []);

  return (
    <ToastContext.Provider value={{ renderToast }}>
      {children}
      <div className="toast-container fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast, index) => (
          <Toast key={index} type={toast.type} message={toast.body} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
