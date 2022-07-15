import { NavigationLink } from "../NavigationLink";
import type { NavigationProps } from "./types";

export const Navigation = ({ navigationLinks }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {navigationLinks.map(({ label, link, icon }) => (
          <NavigationLink label={label} link={link} icon={icon} key={link} />
        ))}
      </ul>
    </nav>
  );
};
