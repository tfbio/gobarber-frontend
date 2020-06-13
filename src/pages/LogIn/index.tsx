import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const LogIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form action="">
        <h1>GoBarber LogIn</h1>

        <Input name="E-mail" icon={FiMail} type="text" placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Login</Button>

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
