import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container } from './style';

interface ProfileErrorProps {
  errors: [];
}

const ProfileError = ({ errors }: ProfileErrorProps): any => {
  if (errors.length > 0) {
    return (
      <Container>
        <ul>
          {errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <AiOutlineCloseCircle />
      </Container>
    );
  }
  return '';
};

export default ProfileError;
