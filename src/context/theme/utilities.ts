import { storageKeys } from "../../constants/storageKeys";
import type { Theme } from "./types";

export const getPreferredTheme = () => {
  const persistedTheme = window.localStorage.getItem(storageKeys.theme);

  if (persistedTheme) {
    return persistedTheme as Theme;
  }

  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkTheme) {
    return "dark";
  }

  return "light";
};
