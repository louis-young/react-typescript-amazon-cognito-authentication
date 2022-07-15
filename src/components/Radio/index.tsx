import type { ChangeEvent } from "react";
import { useRadioGroupContext } from "../RadioGroup";
import type { RadioProps } from "./types";

export const Radio = ({ value, ...props }: RadioProps) => {
  const { name, selectedValue, onSelectedValueChange } = useRadioGroupContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newSelectedValue } = event.target;

    onSelectedValueChange(newSelectedValue);
  };

  const isChecked = value === selectedValue;

  return (
    <input
      {...props}
      type="radio"
      name={name}
      value={value}
      onChange={handleChange}
      checked={isChecked}
    />
  );
};
