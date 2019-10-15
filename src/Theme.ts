import * as styledComponents from "styled-components";

// https://coolors.co/ebe9e9-f3f8f2-3581b8-fcb07e-dee2d6
export const theme = {
  primary: {
    light: "#9CDCFE",
    medium: "#6A96B9",
    dark: "#22A0B6"
  },
  background: {
    light: "#0C4383",
    medium: "#06394C",
    dark: "#071E26"
  },
  accent: {
    light: "#EB649F",
    medium: "#CB0C59",
    dark: "#7B1346"
  }
};

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
  keyframes
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  typeof theme
>;

export default styled;
export { css, createGlobalStyle, ThemeProvider, keyframes };
