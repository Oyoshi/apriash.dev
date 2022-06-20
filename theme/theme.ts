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

export const theme: Theme = {
  fontFamily: '"Rubik", sans-serif',
  fontSizeSm: "12px",
  fontSizeMd: "18px",
  fontSizeLg: "46px",
  fontWeightReg: 400,
  fontWeightBold: 700,
  primary: "#ffffff",
  secondary: "#1f1e26",
  gradient: ["#ec9977", "#cc6475", "#4c286e"],
  maxWidth: "600px",
  spacings: ["0.25em", "0.5em", "0.75em", "1em", "2em", "3em"],
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
