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
          "flex items-center gap-4 p-4 rounded-md text-zinc-600 hover:bg-light dark:text-slate-50":
            true,
          "bg-lighter dark:bg-darker dark:hover:bg-darkest": !isActive,
          "font-medium text-zinc-800 dark:text-white bg-light hover:bg-light dark:bg-darkest":
            isActive,
        })
      }
    >
      {icon} {label}
    </NavLink>
  );
};
