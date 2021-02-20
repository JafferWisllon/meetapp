import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Container, Content } from './style';
import Logo from '../../../assets/images/logo.png';
import { State } from '../../../store';
import { LogoutOut } from '../../../store/modules/auth/actions';

interface User {
  name: string;
}

const Header: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector<State, User | null>(state => state.profile.user);

  const logout = useCallback(() => {
    dispatch(LogoutOut());
    history.push('/');
  }, [dispatch, history]);

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Logo} alt="Meetapp" />
        </Link>

        <div>
          <Link to="/profile">
            <strong>{user?.name}</strong>
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
