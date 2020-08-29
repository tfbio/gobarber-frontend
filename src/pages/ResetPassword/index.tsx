import React, { useCallback, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Container, Content, Image } from './styles';

import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationError from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toastContext';
import api from '../../services/api';

interface ResetFormData {
  password: string;
  password_confirm: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetFormData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().required('password is required'),
          password_confirm: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'passwords must match',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const token = location.search.replace('?token=', '');
        if (!token) {
          addToast({
            type: 'error',
            title: 'Reset Error',
            description: 'A problem happened during password reset',
          });
        }

        const { password, password_confirm } = data;
        await api.post('/password/reset', {
          password,
          password_confirm,
          token,
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Reset Error',
          description: 'A problem happened during password reset',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="New Password"
          />

          <Input
            name="password_confirm"
            icon={FiLock}
            type="password"
            placeholder="Confirm Password"
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Content>
      <Image />
    </Container>
  );
};

export default ResetPassword;
