import type { ReactNode } from "react";

export interface RadioGroupContextValue {
  name: string;
  selectedValue: string | undefined;
  onSelectedValueChange: (newSelectedValue: string) => void;
}

export interface RadioGroupProps {
  name: string;
  children: ReactNode;
  selectedValue: string | undefined;
  onSelectedValueChange: (newSelectedValue: string) => void;
}
