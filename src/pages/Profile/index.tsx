import React, { ChangeEvent, FormEvent, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi';
import api from '../../services/api';

import getValidationError from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toastContext';

import { Container, Content, InputBlock, AvatarInput } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/authContext';

interface ProfileData {
  name: string;
  password: string;
  email: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

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

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        data.append('profile', e.target.files[0]);

        api.patch('/user/avatar').then((response) => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Profile Pic Changed.',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>
          <InputBlock>
            <Input name="name" icon={FiUser} type="text" placeholder="Name" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
          </InputBlock>

          <Input
            name="oldPassword"
            icon={FiLock}
            type="password"
            placeholder="Current Password"
          />
          <Input
            name="newPassword"
            icon={FiLock}
            type="password"
            placeholder="New Password"
          />
          <Input
            name="password_confirm"
            icon={FiLock}
            type="password"
            placeholder="Confirm New Password"
          />

          <Button type="submit">Confirm Changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
