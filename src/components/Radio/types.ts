import type { HTMLAttributes } from "react";

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}
