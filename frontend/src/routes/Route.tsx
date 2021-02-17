import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IAuthState } from '../store';

interface Props extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const token = useSelector<IAuthState>(state => state.auth.token);

  if (!token && isPrivate) {
    return <Redirect to="/" />;
  }

  if (token && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
