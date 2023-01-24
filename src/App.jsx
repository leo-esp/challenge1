import React from "react";

import GlobalStyled from "assets/styles/globalStyled";

import Routes from "./routes";
import theme from "./assets/styles/colors";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;
