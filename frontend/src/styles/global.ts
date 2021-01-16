import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: linear-gradient(#23202c, #402845);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
