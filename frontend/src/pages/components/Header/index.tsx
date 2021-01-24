import React from 'react';
import { Container } from './style';
import Logo from '../../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Meetapp" />

      <div>
        <a href="/profile">
          <strong>Diego fernandes</strong>
          <span>Meu perfil</span>
        </a>

        <button type="button">Sair</button>
      </div>
    </Container>
  );
};

export default Header;
