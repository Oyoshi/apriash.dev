import { useContext } from "react";
import { IThemeContext, ThemeContext } from "theme";

export function useThemeContext(): IThemeContext {
  return useContext<IThemeContext>(ThemeContext);
}
