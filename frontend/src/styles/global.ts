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

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
