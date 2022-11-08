import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing:border-box;  
   
  }

  body {
    line-height: 1;
    font-family: 'Inter', sans-serif;
 
    background-color: #eeee;
  }


  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color:black;
    :hover{
      color:black;
    }
    

  }

  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }

`;

export default GlobalStyles;
