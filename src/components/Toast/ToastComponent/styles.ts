import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;

  padding: 16px 16px 16px 16px;
  border-radius: 8px;
  display: flex;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 6px;
  }
  > svg {
    margin: 4px 8px 0 0;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 19px;
    opacity: 0.6;

    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }

      button {
        margin-top: 0;
      }
    `}
`;
