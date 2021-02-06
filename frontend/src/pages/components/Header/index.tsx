import React, { useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Container, Content } from './style';
import Logo from '../../../assets/images/logo.png';
import { useAuth } from '../../../hooks/AuthContext';

const Header: React.FC = () => {
  const history = useHistory();
  const { signOutRequest } = useAuth();

  const logout = useCallback(() => {
    signOutRequest();
    history.push('/');
  }, [history, signOutRequest]);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Logo} alt="Meetapp" />
        </Link>

        <div>
          <Link to="/profile">
            <strong>Diego fernandes</strong>
            <span>Meu perfil</span>
          </Link>

          <button type="button" onClick={logout}>
            Sair
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
