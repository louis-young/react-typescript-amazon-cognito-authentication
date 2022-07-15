export type NavigationLink = {
  label: string;
  link: string;
  icon: JSX.Element;
};

export interface NavigationProps {
  navigationLinks: NavigationLink[];
}
