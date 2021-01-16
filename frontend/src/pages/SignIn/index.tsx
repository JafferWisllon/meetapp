import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

import Logo from '../../assets/images/logo.png';

import Button from '../components/Button';
import Input from '../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <form>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/register">Criar conta grátis!</Link>
    </Container>
  );
};

export default SignIn;
