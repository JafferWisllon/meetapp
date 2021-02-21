/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store';
import { User } from '../../store/modules/profile/types';
import Header from '../components/Header';
import { Content } from './style';
import ProfileError from '../components/ProfileError';
import { UpdateProfile } from '../../store/modules/profile/actions';

interface Request {
  name?: string;
  email?: string;
  oldPassword?: string;
  password?: string;
  passwordConfirmation?: string;
}

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector<State, User | null>(state => state.profile.user);
  const [errors, setErrors] = useState([] as any);

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Digite um e-mail válido'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword: any, field: any) =>
      oldPassword
        ? field
            .required('Caso informe a senha antiga uma nova deve ser definida')
            .min(6, 'e deve ter pelo menos 6 caracteres')
        : field,
    ),
    passwordConfirmation: Yup.string().when(
      'password',
      (password: any, field: any) =>
        password
          ? field
              .required('Confirmação de senha está diferente da nova senha')
              .oneOf(
                [Yup.ref('password')],
                'Confirmação de senha está diferente da nova senha',
              )
          : field,
    ),
  });

  const INITIAL_VALUES: Request = {
    name: user?.name,
    email: user?.email,
    oldPassword: '',
    password: '',
    passwordConfirmation: '',
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: async values => {
      schema
        .validate(values, {
          abortEarly: false,
        })
        .catch(err => {
          const schemaErrors = [];
          for (let i = 0; i < err.inner.length; i += 1) {
            schemaErrors.push(err.inner[i].message);
          }
          setErrors(schemaErrors);
        });

      if (values.name === '') {
        delete values.name;
      }

      if (values.email === '') {
        delete values.email;
      }

      if (values.password === '') {
        delete values.password;
      }

      if (values.oldPassword === '') {
        delete values.oldPassword;
      }

      if (values.passwordConfirmation === '') {
        delete values.passwordConfirmation;
      }
      const request = {
        userId: user?.id,
        request: values,
      };

      dispatch(UpdateProfile(request));
      setErrors([]);
    },
  });

  return (
    <>
      <Header />
      <Content>
        <ProfileError errors={errors} />
        <form onSubmit={formik.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Seu nome"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            name="email"
            type="email"
            placeholder="Seu email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <hr />
          <input
            name="oldPassword"
            type="password"
            placeholder="Senha atual"
            onChange={formik.handleChange}
            value={formik.values.oldPassword}
          />
          <input
            name="password"
            type="password"
            placeholder="Nova senha"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <input
            name="passwordConfirmation"
            type="password"
            placeholder="Confirmação de senha"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
          />
          <div id="button">
            <button type="submit">
              <AiOutlinePlusCircle />
              Salvar perfil
            </button>
          </div>
        </form>
      </Content>
    </>
  );
};

export default Profile;
