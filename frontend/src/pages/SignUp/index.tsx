import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from './style';

import Logo from '../../assets/images/logo.png';

const SignUp: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Sua senha secreta" />
        <Button type="submit">Criar conta</Button>
      </form>
      <Link to="/">Ja tenho login!</Link>
    </Container>
  );
};

export default SignUp;
