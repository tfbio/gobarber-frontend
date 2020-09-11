import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 20px 0%;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
  }

  strong {
    color: #ff9000;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 32px auto;
  display: flex;
`;
export const Schedule = styled.div`
  flex: 1;
  margin: 28px auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }
  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 58px;

  > strong {
    color: #999591;
    font-size: 20px;
  }
  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 10px 18px;
    border-radius: 8px;
    margin-top: 16px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      background: #ff9000;
    }

    > img {
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }
    span {
      margin-left: auto;
      align-items: center;

      svg {
        position: relative;
        color: #ff9000;
        margin-right: 8px;
        height: 20px;
        width: 20px;
        top: 4px;
      }
    }
  }
`;
export const Calendar = styled.aside`
  width: 380px;
`;
