import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationError from '../../utils/getValidationErrors';

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async (data: string[]) => {
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
    } catch (err) {
      const errors = getValidationError(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
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
