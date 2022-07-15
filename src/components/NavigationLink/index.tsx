import classNames from "classnames";
import { NavLink } from "react-router-dom";
import type { NavigationLinkProps } from "./types";

export const NavigationLink = ({ label, link, icon }: NavigationLinkProps) => {
  return (
    <NavLink
      key={link}
      to={link}
      className={({ isActive }) =>
        classNames({
          "flex items-center gap-4 rounded-md p-4 text-zinc-600 hover:bg-light dark:text-slate-50":
            true,
          "bg-lighter dark:bg-darker dark:hover:bg-darkest": !isActive,
          "bg-light font-medium text-zinc-800 hover:bg-light dark:bg-darkest dark:text-white":
            isActive,
        })
      }
    >
      {icon} {label}
    </NavLink>
  );
};
