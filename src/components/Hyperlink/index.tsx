import { Link } from "react-router-dom";
import type { HyperlinkProps } from "./types";

export const Hyperlink = ({ link, children }: HyperlinkProps) => {
  return (
    <Link to={link} className="text-blue-600 underline hover:opacity-80">
      {children}
    </Link>
  );
};
