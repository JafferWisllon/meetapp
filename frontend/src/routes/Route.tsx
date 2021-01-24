import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { decode } from 'jsonwebtoken';

interface Props extends RouteProps {
  isPrivate?: boolean;
}

interface tokenDecoded {
  iat: number;
  exp: number;
  sub: string;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  let signed;
  const token = localStorage.getItem('@meetapp-token');

  if (token) {
    const { exp } = decode(token) as tokenDecoded;

    signed = exp > (new Date().getTime() + 1) / 1000;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
