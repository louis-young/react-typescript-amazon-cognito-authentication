import { createContext, useContext } from "react";
import type { RadioGroupContextValue, RadioGroupProps } from "./types";

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined,
);

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("`Radio` must be used within a `RadioGroup`.");
  }

  return context;
};

export const RadioGroup = ({
  selectedValue,
  onSelectedValueChange,
  name,
  children,
}: RadioGroupProps) => {
  const value = {
    name,
    selectedValue,
    onSelectedValueChange,
  };

  return (
    <RadioGroupContext.Provider value={value}>
      {children}
    </RadioGroupContext.Provider>
  );
};
