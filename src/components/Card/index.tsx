import type { CardProps } from "./types";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-lightest dark:bg-dark p-8 rounded-lg">{children}</div>
  );
};
