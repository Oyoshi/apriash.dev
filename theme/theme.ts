interface Theme {
  fontFamily: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  fontWeightReg: number;
  fontWeightBold: number;
  primary: string;
  secondary: string;
  gradient: Array<string>;
  maxWidth: string;
  spacings: Array<string>;
}

const theme = {
  fontFamily: '"Rubik", sans-serif',
  fontSizeSm: "12px",
  fontSizeMd: "18px",
  fontSizeLg: "46px",
  fontWeightReg: 400,
  fontWeightBold: 700,
  maxWidth: "600px",
  spacings: ["0.25em", "0.5em", "0.75em", "1em", "2em", "3em"],
};

export const lightTheme: Theme = {
  ...theme,
  primary: "#1f1e26",
  secondary: "#ffffff",
  gradient: ["#ec9977", "#F989BA", "#F35EBC"],
};

export const darkTheme: Theme = {
  ...theme,
  primary: "#ffffff",
  secondary: "#1f1e26",
  gradient: ["#ec9977", "#cc6475", "#4c286e"],
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
