import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { useToast } from '../../hooks/toastContext';

import getValidationError from '../../utils/getValidationErrors';

import { Container, Content, Image } from './styles';
import logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

interface ForgotFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotFormData) => {
      try {
        setLoading(true);
        const schema = Yup.object().shape({
          email: Yup.string().required('An valid email is required').email(),
        });
        await schema.validate(data, { abortEarly: false });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'Request sent',
          description: 'Your request for new password was sent',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Request failed',
          description: 'An error occured during your request for new password',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Image />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Password Recovery</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft size={20} style={{ marginRight: '14px' }} />
          Return to Home
        </Link>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
