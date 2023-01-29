import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/colors";
import GlobalStyles from "../src/assets/styles/globalStyled";

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
