import { PuffLoader } from "react-spinners";
import type { ButtonProps } from "./types";

export const Button = ({
  type = "button",
  onClick,
  isLoading = false,
  isDisabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className="flex min-h-[3rem] min-w-[10rem] items-center justify-center rounded bg-blue-600 py-3 px-10 font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-75"
    >
      {isLoading ? <PuffLoader size="2rem" color="white" /> : children}
    </button>
  );
};
