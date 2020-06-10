import styled from 'styled-components';
import { shade } from 'polished';

import loginImage from '../../assets/sign-in-background.png';

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
    margin: 80px 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 340px;

    h1 {
      color: #ff9000;
      margin-bottom: 24px;
      font-size: 30px;
    }

    input {
      color: #fff;
      background: #232129;
      border: 2px solid #232129;
      border-radius: 8px;
      width: 100%;
      padding: 14px;

      & + input {
        margin-top: 8px;
      }
    }

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

    a {
      justify-content: center;
      margin-top: 8px;
      color: #fff;
      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;

export const Image = styled.section`
  flex: 1;
  background: url(${loginImage}) no-repeat;
  background-size: cover;
`;
