import type { TextInputProps } from "./types";

export const TextInput = ({
  name,
  placeholder = "",
  id,
  type,
  value,
  onValueChange,
  isDisabled = false,
  isRequired = false,
  hasAutoFocus = false,
}: TextInputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      disabled={isDisabled}
      required={isRequired}
      autoFocus={hasAutoFocus}
      className="block w-full border border-light p-3 rounded-md disabled:opacity-75 bg-lighter dark:bg-darker dark:border-darkest"
    />
  );
};
