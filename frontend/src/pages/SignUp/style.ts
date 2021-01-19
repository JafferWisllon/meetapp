import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    /*error message*/
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    color: #c53030;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }

  img {
    margin-bottom: 42px;
  }

  form {
    max-width: 315px;
    display: flex;
    flex-direction: column;
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
