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
      className="py-3 px-10 min-w-[10rem] min-h-[3rem] flex justify-center items-center bg-blue-600 text-white font-medium rounded hover:opacity-90 disabled:opacity-75 disabled:cursor-not-allowed"
    >
      {isLoading ? <PuffLoader size="2rem" color="white" /> : children}
    </button>
  );
};
