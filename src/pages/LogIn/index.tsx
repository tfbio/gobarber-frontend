import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

const LogIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form action="">
        <h1>GoBarber LogIn</h1>

        <input type="text" placeholder="E-mail" />

        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>

        <a href="/">Forgot my password</a>
      </form>

      <Link to="/">
        <FiLogIn size={20} style={{ marginRight: '14px' }} />
        Create Account
      </Link>
    </Content>
    <Image />
  </Container>
);

export default LogIn;
