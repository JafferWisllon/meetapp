import styled from 'styled-components';
import { shade } from 'polished';

interface Props {
  disabled: boolean;
}

export const Container = styled.button<Props>`
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

  &[disabled] {
    cursor: not-allowed;
    background: ${shade(0.3, '#e5556e')};
  }
`;
