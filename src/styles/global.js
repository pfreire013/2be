import { createGlobalStyle } from 'styled-components'
import { theme } from '../theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
  }

  body {
    background: ${theme.color.lightGray};
    -webkit-font-smoothing: antialiased !important;
   
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  } 

  button {
    cursor: pointer
  }
`;