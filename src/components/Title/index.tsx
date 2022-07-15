import type { TitleProps } from "./types";

export const Title = ({ children }: TitleProps) => {
  return <h2 className="text-3xl md:text-4xl font-semibold">{children}</h2>;
};
