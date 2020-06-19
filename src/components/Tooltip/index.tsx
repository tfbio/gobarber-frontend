import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  textMsg: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ textMsg, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{textMsg}</span>
    </Container>
  );
};

export default Tooltip;
