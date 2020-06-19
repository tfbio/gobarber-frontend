import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerExtension {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerExtension>`
  background: #232129;
  border-radius: 8px;
  width: 100%;
  padding: 14px;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
      `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 8px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
