import { useNavigate } from "react-router-dom";
import { authenticationService } from "../../services/authentication";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import { Logo } from "../Logo";
import { Spacer } from "../Spacer";
import { pagePaths } from "../../constants/pagePaths";
import { icons } from "../../assets/icons";

const navigationLinks = [
  {
    label: "Dashboard",
    link: pagePaths.dashboard,
    icon: icons.dashboard,
  },
  {
    label: "Test",
    link: pagePaths.test,
    icon: icons.lineGraph,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  const { user, setUser } = useAuthenticationContext();

  const handleSignOutButtonClick = async () => {
    await authenticationService.signOut();

    setUser(undefined);

    navigate(pagePaths.signIn);
  };

  return (
    <aside className="flex h-full flex-col justify-between bg-lightest p-6 dark:bg-dark">
      <div>
        <div className="py-6">
          <Logo />
        </div>

        <Spacer />

        <Navigation navigationLinks={navigationLinks} />
      </div>

      {user && (
        <UserMenu
          fullName={`${user.attributes.name} ${user.attributes.family_name}`}
          emailAddress={user.attributes.email}
          onSignOutButtonClick={handleSignOutButtonClick}
        />
      )}
    </aside>
  );
};
