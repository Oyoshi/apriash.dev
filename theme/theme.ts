interface Theme {
  fontFamily: string;
  background: string;
  primary: string;
  //secondary: string;
  //accent: string;
  //accentDark: string;
}

export const theme: Theme = {
  fontFamily: '"Rubik", sans-serif',
  background: "#1f1e26",
  primary: "#ffffff",
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
