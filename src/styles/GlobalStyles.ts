import { createGlobalStyle } from "styled-components";
import { devices } from "../utils/themes/mediaQueries";

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

  
     @media ${devices.tabland} {
        font-size: 50%; 
    }
    @media ${devices.tabport} { 
        font-size: 48.5%;
    }
    @media ${devices.phone} {
        font-size: 45%;
    }

}

body {
    height: 100%;
    font-family: 'Montserrat Alternates', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
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
