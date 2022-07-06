import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "../src/utils/themes/theme";
import GlobalStyle from "../src/styles/GlobalStyles";
import LandingPage from './pages/landing';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyle />
     <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
