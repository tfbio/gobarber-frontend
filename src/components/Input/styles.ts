import styled, { css } from 'styled-components';

interface ContainerExtension {
  isFocused: boolean;
  isFilled: boolean;
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
