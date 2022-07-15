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
      className="block w-full rounded-md border border-light bg-lighter p-3 disabled:opacity-75 dark:border-darkest dark:bg-darker"
    />
  );
};
