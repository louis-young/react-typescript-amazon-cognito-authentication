import type { ReactNode } from "react";

type Type = "button" | "reset" | "submit";

export interface ButtonProps {
  type: Type;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}
