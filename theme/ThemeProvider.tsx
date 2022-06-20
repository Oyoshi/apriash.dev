import { useState, createContext, FC, ReactNode } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";

type ThemeType = "light" | "dark";

export interface IThemeContext {
  themeType: ThemeType;
  switchTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  themeType: "light",
  switchTheme: () => null,
});

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>("dark");

  const switchTheme = () => {
    if (themeType === "light") {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  };

  const themeProviderDefaultValue: IThemeContext = {
    themeType: themeType,
    switchTheme: switchTheme,
  };

  return (
    <ThemeContext.Provider value={themeProviderDefaultValue}>
      <SCThemeProvider theme={themeType === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
