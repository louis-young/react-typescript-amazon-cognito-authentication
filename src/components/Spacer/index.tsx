import classNames from "classnames";
import type { SpacerProps } from "./types";

export const Spacer = ({ size = "medium" }: SpacerProps) => {
  return (
    <div
      className={classNames({
        "h-3": size === "small",
        "h-6": size === "medium",
        "h-10": size === "large",
      })}
    />
  );
};
