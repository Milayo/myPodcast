import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
    font-size: 62.5%; 
    height: 100%;
  
}
body {
    height: 100%;
    line-height: 1.5;
  -webkit-font-smoothing: antialiased;
    a {
        outline: none;
        text-decoration: none;
    }
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}
`;
