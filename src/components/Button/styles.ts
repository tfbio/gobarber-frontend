import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    color: #312e38;
    background: #ff9000;
    font-weight: 500;
    border: 0;
    border-radius: 8px;

    height: 52px;
    width: 100%;
    padding: 0 14px;

    margin-top: 16px;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
