import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const LogIn: React.FC = () => {
  function handleLogin(): void {
    console.log('login');
  }
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleLogin}>
          <h1>GoBarber LogIn</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Login</Button>

          <a href="/">Forgot my password</a>
        </Form>

        <Link to="/register">
          <FiLogIn size={20} style={{ marginRight: '14px' }} />
          Create Account
        </Link>
      </Content>
      <Image />
    </Container>
  );
};

export default LogIn;
