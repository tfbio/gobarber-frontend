import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

import { useAuth } from '../../hooks/authContext';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt="Profile" />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={logout}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Schedule</h1>
          <p>
            <span>Today</span>
            <span>Day 5</span>
            <span>Monday</span>
          </p>

          <NextAppointment>
            <strong>Next Appointment:</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/61916772?s=460&u=e0be4ed8cb4979ef573730ff81d28666887aa924&v=4"
                alt="Appointment"
              />
              <strong>Paozinho Manoleid</strong>
              <span>
                <FiClock />
                09:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
