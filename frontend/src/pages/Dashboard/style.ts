import styled from 'styled-components';

export const Content = styled.div`
  width: 940px;
  margin: 50px auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    color: #fff;
  }

  a {
    background: #e5556e;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 172px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 400;

    svg {
      margin-right: 15px;
    }
  }
`;

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
