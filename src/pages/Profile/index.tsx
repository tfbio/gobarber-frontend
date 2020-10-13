import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import api from '../../services/api';

import getValidationError from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toastContext';

import { Container, Content } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface ProfileData {
  name: string;
  password: string;
  email: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ProfileData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string().required('Valid e-mail is required').email(),
          password: Yup.string().min(8),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/user', data);
        history.push('/');

        addToast({
          type: 'success',
          title: 'Account Created!',
          description: 'Your account was successefully created',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Register Error',
          description: 'A problem happened during account register',
        });
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>My Profile</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Confirm Changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
