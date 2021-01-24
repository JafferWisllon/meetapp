import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content } from './style';
import Logo from '../../../assets/images/logo.png';

const Header: React.FC = () => {
  const history = useHistory();

  const logout = useCallback(() => {
    localStorage.removeItem('@meetapp-token');
    history.push('/');
  }, [history]);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Meetapp" />

        <div>
          <a href="/profile">
            <strong>Diego fernandes</strong>
            <span>Meu perfil</span>
          </a>

          <button type="button" onClick={logout}>
            Sair
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
