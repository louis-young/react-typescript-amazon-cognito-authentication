import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { buildDashboardPageUrl } from "../../utilities/url";

export const Logo = () => {
  return (
    <Link to={buildDashboardPageUrl()} className="block w-fit">
      <img
        src={logo}
        alt={process.env.REACT_APP_APPLICATION_NAME}
        className="h-10 hover:opacity-80"
      />
    </Link>
  );
};
