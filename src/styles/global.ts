import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --gray-100: #F8F8F8;
    --gray-200: #9A9A9A;
  } 

  @font-face {
    font-family: "Monument";
    src: url('/assets/fonts/MonumentBold.otf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden scroll;
  }

  body, input, textarea, button {
    font-family: "Roboto mono", sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a { 
    color: inherit;
    text-decoration: none;
  }
`