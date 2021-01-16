import React from 'react';
import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = props => {
  return <Container {...props} />;
};

export default Input;
