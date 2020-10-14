import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  > header {
    width: 100%;
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 28px;
        height: 28px;
      }
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin: -160px auto 0;

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

export const AvatarInput = styled.div`
  margin-bottom: 22px;
  position: relative;
  width: 196px;
  align-self: center;

  img {
    width: 196px;
    height: 196px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ff9000;
    border-radius: 50%;
    border: 0;
    right: 10px;
    bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 22px;
      height: 22px;
      color: #312e38;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InputBlock = styled.div`
  margin-bottom: 28px;
`;
