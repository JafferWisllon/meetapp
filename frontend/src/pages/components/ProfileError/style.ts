import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #c53030;
  border-radius: 4px;
  padding: 20px;
  color: #fff;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  ul {
    li {
      list-style: none;
      & + li {
        margin-top: 10px;
      }
    }
  }
`;
