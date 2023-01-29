import React from "react";

import GlobalStyled from "assets/styles/globalStyled";

import Routes from "./routes";
import theme from "./assets/styles/colors";
import { ThemeProvider } from "styled-components";
import store from "./store";
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Routes />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
