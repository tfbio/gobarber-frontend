import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toastContext';
import Toast from './ToastComponent';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastMsg: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesTransitions = useTransition(messages, (msg) => msg.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesTransitions.map(({ key, item, props }) => (
        <Toast key={key} style={props} messages={item} />
      ))}
    </Container>
  );
};

export default ToastMsg;
