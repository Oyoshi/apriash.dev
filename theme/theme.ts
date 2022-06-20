interface Theme {
  fontFamily: string;
  primary: string;
  secondary: string;
  gradient: Array<string>;
  maxWidth: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
}

export const theme: Theme = {
  fontFamily: '"Rubik", sans-serif',
  primary: "#ffffff",
  secondary: "#1f1e26",
  gradient: ["#ec9977", "#cc6475", "#4c286e"],
  maxWidth: "600px",
  fontSizeSm: "12px",
  fontSizeMd: "18px",
  fontSizeLg: "46px",
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
