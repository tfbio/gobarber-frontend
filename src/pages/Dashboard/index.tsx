import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />
        </HeaderContent>
        <Profile>
          <img
            src="https://avatars0.githubusercontent.com/u/61916772?s=460&u=e0be4ed8cb4979ef573730ff81d28666887aa924&v=4"
            alt="Profile"
          />
          <div>
            <span>Welcome,</span>
            <strong>Fabio Oliveira</strong>
          </div>
        </Profile>
        <button type="button">
          <FiPower />
        </button>
      </Header>
    </Container>
  );
};

export default Dashboard;
