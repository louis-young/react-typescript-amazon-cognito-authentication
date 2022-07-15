import type { TitleProps } from "./types";

export const Title = ({ children }: TitleProps) => {
  return <h2 className="text-3xl font-semibold md:text-4xl">{children}</h2>;
};
