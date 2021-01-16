import React from 'react';

import { Container } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
