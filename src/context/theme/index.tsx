import { createContext, useEffect, useState } from "react";
import { storageKeys } from "../../constants/storageKeys";
import type {
  Theme,
  ThemeContextProviderProps,
  ThemeContextValue,
} from "./types";
import { getPreferredTheme } from "./utilities";

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    localStorage.setItem(storageKeys.theme, theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme === "dark" ? "dark" : ""}>
        <div className="text-zinc-900 transition-all dark:text-white">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
