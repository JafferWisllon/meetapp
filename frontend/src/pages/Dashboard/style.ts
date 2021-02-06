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
