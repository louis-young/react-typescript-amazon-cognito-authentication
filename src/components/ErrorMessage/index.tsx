import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="p-4 rounded bg-red-500 text-white font-semibold text-center">
      {children}
    </p>
  );
};
