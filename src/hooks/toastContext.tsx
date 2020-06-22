import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import Toast from '../components/Toast';

interface ToastContextData {
  addToast(msg: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback((msg: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const newToast = {
      id,
      type: msg.type,
      title: msg.title,
      description: msg.description,
    };

    setMessage((oldState) => [...oldState, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessage((oldState) => oldState.filter((msg) => msg.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={message} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
