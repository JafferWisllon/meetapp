import React from 'react';

import { Container } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container disabled={loading} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
