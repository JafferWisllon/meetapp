import React, { createContext, useContext, useState, useEffect } from 'react';
import { decode } from 'jsonwebtoken';
import { signIn } from '../services/users';
import api from '../services/api';

interface AuthContextData {
  loading: boolean;
  signed: boolean;
  signInRequest(request: SignInRequest): Promise<void>;
  signOutRequest(): void;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface tokenDecoded {
  iat: number;
  exp: number;
  sub: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@meetapp-token');

    if (token) {
      const { exp } = decode(token) as tokenDecoded;

      setSigned(exp > (new Date().getTime() + 1) / 1000);
    }
  }, []);

  async function signInRequest(request: SignInRequest): Promise<void> {
    setLoading(true);
    const response = await signIn(request);
    const { token } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;
    localStorage.setItem('@meetapp-token', token);
    setSigned(true);
    setLoading(false);
  }

  function signOutRequest() {
    localStorage.removeItem('@meetapp-token');
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        signInRequest,
        signOutRequest,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export { AuthProvider, useAuth };
