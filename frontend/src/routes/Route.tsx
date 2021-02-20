import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
import { useSelector } from 'react-redux';
import { State } from '../store';

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
  const token = useSelector<State, string | null>(state => state.auth.token);

  let isAuthorized;
  if (token !== null) {
    const expAuthToken = decode(token) as tokenDecoded;

    isAuthorized =
      new Date() <
      new Date(parseInt(expAuthToken && `${expAuthToken.exp}000`, 10));
  }

  if (!isAuthorized && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthorized && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
