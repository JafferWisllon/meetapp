import React from 'react';
import { useFormik } from 'formik';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { User } from '../../store/modules/profile/types';
import Header from '../components/Header';
import { Content } from './style';

const Profile: React.FC = () => {
  const user = useSelector<State, User | null>(state => state.profile.user);
  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      lastPassword: '',
      newPassword: '',
      passwordConfirmation: '',
    },
    onSubmit: async values => {
      console.log(values);
    },
  });
  return (
    <>
      <Header />
      <Content>
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
            name="lastPassword"
            type="password"
            placeholder="Senha atual"
            onChange={formik.handleChange}
            value={formik.values.lastPassword}
          />
          <input
            name="newPassword"
            type="password"
            placeholder="Nova senha"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
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
