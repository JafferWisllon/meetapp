import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #e5556e;
  margin-top: 15px;
  height: 50px;
  width: 315px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.1, '#e5556e')};
  }
`;
