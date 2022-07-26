import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { authenticationService } from "../../services/authentication";
import type { CustomCognitoUser } from "../../services/authentication/types";
import type {
  AuthenticationContextProviderProps,
  AuthenticationContextValue,
} from "./types";

export const AuthenticationContext = createContext<
  AuthenticationContextValue | undefined
>(undefined);

export const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [user, setUser] = useState<CustomCognitoUser>();

  const { isLoading: isDeterminingAuthenticationStatus } =
    useQuery<CustomCognitoUser>(
      ["getAuthenticatedUser"],
      () => authenticationService.getAuthenticatedUser(),
      {
        retry: false,
        onSuccess: (user) => {
          setUser(user);
        },
      },
    );

  const getJwtToken = async () => {
    const currentSession = await authenticationService.getCurrentSession();

    const idToken = currentSession.getIdToken();

    const jwtToken = idToken.getJwtToken();

    return jwtToken;
  };

  const value = {
    isDeterminingAuthenticationStatus,
    user,
    setUser,
    getJwtToken,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
