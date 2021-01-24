import React from 'react';
import { Container, Content } from './style';
import Logo from '../../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Meetapp" />

        <div>
          <a href="/profile">
            <strong>Diego fernandes</strong>
            <span>Meu perfil</span>
          </a>

          <button type="button">Sair</button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
