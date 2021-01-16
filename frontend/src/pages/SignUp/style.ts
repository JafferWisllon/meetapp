import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 42px;
  }

  form {
    max-width: 315px;
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      background: #261d2d;
      border: 0;
      font-size: 18px;
      padding: 0 15px;
      color: #cccccc;

      & + input {
        margin-top: 15px;
      }
    }
  }

  a {
    color: #ffffff;
    margin-top: 30px;
    font-weight: 300;
    opacity: 0.7;

    &:hover {
      text-decoration: underline;
    }
  }
`;
