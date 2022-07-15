import type { Dispatch, ReactNode } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
}

export interface ThemeContextProviderProps {
  children: ReactNode;
}
