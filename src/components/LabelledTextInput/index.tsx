import { Spacer } from "../Spacer";
import { TextInput } from "../TextInput";
import type { LabelledTextInputProps } from "./types";

export const LabelledTextInput = ({
  label,
  placeholder = "",
  name,
  id,
  type,
  value,
  onValueChange,
  isDisabled = false,
  isRequired = false,
  hasAutoFocus = false,
}: LabelledTextInputProps) => {
  return (
    <label htmlFor={id}>
      <span className="block font-medium">{label}</span>

      <Spacer size="small" />

      <TextInput
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onValueChange={onValueChange}
        isDisabled={isDisabled}
        isRequired={isRequired}
        hasAutoFocus={hasAutoFocus}
      />
    </label>
  );
};
