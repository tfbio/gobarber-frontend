import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toastContext';

import { Container } from './styles';

interface ToastProps {
  messages: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ messages, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(messages.id);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, messages.id]);

  return (
    <Container
      type={messages.type}
      hasDescription={!!messages.description}
      style={style}
    >
      {icons[messages.type || 'info']}
      <div>
        <strong>{messages.title}</strong>
        {messages.description && <p>{messages.description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(messages.id)}>
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;
