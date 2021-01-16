import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

import Logo from '../../assets/images/logo.png';

import Button from '../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Sua senha secreta" />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/register">Criar conta grátis!</Link>
    </Container>
  );
};

export default SignIn;
