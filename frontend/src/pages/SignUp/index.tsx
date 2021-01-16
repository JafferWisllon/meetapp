import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

import Logo from '../../assets/images/logo.png';

import Button from '../components/Button';
import Input from '../components/Input';

const SignUp: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <form>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Button type="submit">Criar conta</Button>
      </form>
      <Link to="/">Ja tenho login!</Link>
    </Container>
  );
};

export default SignUp;
