import styled from 'styled-components';

export const Container = styled.input`
  height: 50px;
  background: #261d2d;
  border: 0;
  font-size: 18px;
  padding: 0 15px;
  color: #cccccc;

  & + input {
    margin-top: 15px;
  }
`;
