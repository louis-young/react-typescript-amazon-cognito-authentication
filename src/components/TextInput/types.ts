import type { HTMLInputTypeAttribute } from "react";

export interface TextInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  id: string;
  value: string;
  onValueChange: (newValue: string) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
}
