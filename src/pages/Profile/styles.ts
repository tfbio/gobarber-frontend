import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin: 0 auto;

  width: 100%;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ff9000;

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }

  form {
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 340px;

    h1 {
      color: #ff9000;
      margin-bottom: 24px;
      font-size: 30px;
    }

    button {
      margin-bottom: -28px;
    }
  }
`;
