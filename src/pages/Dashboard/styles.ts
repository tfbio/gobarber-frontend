import styled from 'styled-components';
import { shade } from 'polished';

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

  a {
    margin-left: auto;
    color: #999591;

    > svg {
      width: 28px;
      height: 28px;
    }
  }

  button {
    margin-left: 42px;
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
  margin-right: auto;

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

  a {
    text-decoration: none;
    color: #ff9000;

    &:hover {
      opacity: 0.8;
    }
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

export const Section = styled.section`
  margin-top: 30px;

  > strong {
    color: #999591;
    font-size: 22px;
    line-height: 24px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 14px;
    margin-bottom: 14px;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 12px;
  }

  span {
    margin-left: auto;
    align-items: center;
    color: #f4ede8;

    svg {
      position: relative;
      color: #ff9000;
      margin-right: 8px;
      height: 20px;
      width: 20px;
      top: 4px;
    }
  }

  div {
    background: #3e3b47;
    display: flex;
    flex: 1;
    align-items: center;
    padding: 10px 18px;
    border-radius: 8px;
    margin-left: 16px;

    > img {
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
  margin-left: 64px;
  width: 380px;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
