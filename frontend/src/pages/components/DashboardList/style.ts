import styled from 'styled-components';

export const List = styled.ul`
  li {
    background: #261f2e;
    padding: 0 20px;
    list-style: none;

    & + li {
      margin-top: 10px;
    }

    a {
      border-radius: 4px;
      height: 62px;
      display: flex;
      color: #fff;
      align-items: center;
      justify-content: space-between;
    }

    div {
      display: flex;
      align-items: center;
      color: #c5c5c5;
      svg {
        margin-left: 20px;
      }
    }
  }
`;
