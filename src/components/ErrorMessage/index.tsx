import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="rounded bg-red-500 p-4 text-center font-semibold text-white">
      {children}
    </p>
  );
};
