import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import getValidationError from '../../utils/getValidationErrors';

import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: string[]) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Valid e-mail is required').email(),
        password: Yup.string().min(8),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
      const errors = getValidationError(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Image />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Register your Account</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Register</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft size={20} style={{ marginRight: '14px' }} />
          Return to Home
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
