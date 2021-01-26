import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface Props extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
