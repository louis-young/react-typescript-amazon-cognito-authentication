import { useContext } from "react";
import { AuthenticationContext } from "../../../context/authentication";

export const useAuthenticationContext = () => {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "`useAuthenticationContext` must be used within a `AuthenticationContextProvider`.",
    );
  }

  return context;
};
