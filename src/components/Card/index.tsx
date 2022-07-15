import type { CardProps } from "./types";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-lg bg-lightest p-8 dark:bg-dark">{children}</div>
  );
};
