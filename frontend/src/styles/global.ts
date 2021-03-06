import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body, html {
    width: 100%;
    background: #333333;
  }
`;

export default GlobalStyles;
