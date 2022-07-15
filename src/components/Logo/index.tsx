import { Link } from "react-router-dom";
import { pagePaths } from "../../constants/pagePaths";
import logo from "../../assets/images/logo.png";

export const Logo = () => {
  return (
    <Link to={pagePaths.dashboard} className="block w-fit">
      <img
        src={logo}
        alt={process.env.REACT_APP_APPLICATION_NAME}
        className="h-10 hover:opacity-80"
      />
    </Link>
  );
};
