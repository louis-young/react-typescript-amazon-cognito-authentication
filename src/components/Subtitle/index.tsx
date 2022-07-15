import type { SubtitleProps } from "./types";

export const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
};
