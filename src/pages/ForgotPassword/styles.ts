import styled from 'styled-components';
import { shade } from 'polished';

import signInImage from '../../assets/signin-background.png';

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

  width: 100%;
  max-width: 600px;

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

    a {
      justify-content: center;
      margin-top: 0;
      color: #fff;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }

    button {
      margin-bottom: -28px;
    }
  }
`;

export const Image = styled.section`
  flex: 1;
  background: url(${signInImage}) no-repeat;
  background-size: cover;
`;
