import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container } from './style';
import Logo from '../../assets/images/logo.png';

import Button from '../components/Button';
import Input from '../components/Input';

import { RequestSignUp } from '../../store/modules/auth/actions';

const SignUp: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      email: Yup.string()
        .email('Digite um email válido')
        .required('Email é obrigatório'),
      password: Yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Mínimo 6 caracteres'),
    }),
    onSubmit: async values => {
      dispatch(RequestSignUp(values));
      history.push('/');
    },
  });

  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <form onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Nome completo"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>
            <FiAlertCircle />
            {formik.errors.name}
          </div>
        ) : null}
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>
            <FiAlertCircle />
            {formik.errors.email}
          </div>
        ) : null}
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>
            <FiAlertCircle />
            {formik.errors.password}
          </div>
        ) : null}
        <Button type="submit" loading={false}>
          Criar conta
        </Button>
      </form>
      <Link to="/">Ja tenho login!</Link>
    </Container>
  );
};

export default SignUp;
