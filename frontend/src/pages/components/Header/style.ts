import styled from 'styled-components';

export const Container = styled.div`
  background: #19171f;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-between;

    a {
      width: 114px;
      strong {
        font-size: 14px;
        color: #fff;
        display: block;
      }

      span {
        color: #999999;
        font-size: 14px;
        display: block;
        text-align: right;
      }
    }

    button {
      background: #e5556e;
      border-radius: 4px;
      height: 50px;
      width: 72px;
      border: 0;
      color: #fff;
      font-size: 18px;
    }
  }
`;
