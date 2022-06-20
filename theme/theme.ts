interface Theme {
  fontFamily: string;
  primary: string;
  secondary: string;
  gradient: Array<string>;
}

export const theme: Theme = {
  fontFamily: '"Rubik", sans-serif',
  primary: "#ffffff",
  secondary: "#1f1e26",
  gradient: ["#ec9977", "#cc6475", "#4c286e"],
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
