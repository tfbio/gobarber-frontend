import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationError from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/authContext';
import { useToast } from '../../hooks/toastContext';

interface LoginFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { login } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required')
            .email('Invalid e-mail'),
          password: Yup.string().required('password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Login Error',
          description: 'A problem happened during login',
        });
      }
    },
    [login, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleLogin}>
          <h1>GoBarber LogIn</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Login</Button>

          <Link to="/forgot_password">Forgot my password</Link>
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
