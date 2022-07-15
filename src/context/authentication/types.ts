import type { Dispatch, ReactNode } from "react";
import type { CustomCognitoUser } from "../../services/authentication/types";

export interface AuthenticationContextValue {
  isDeterminingAuthenticationStatus: boolean;
  user: CustomCognitoUser | undefined;
  setUser: Dispatch<React.SetStateAction<CustomCognitoUser | undefined>>;
  getJwtToken: () => Promise<string>;
}

export interface AuthenticationContextProviderProps {
  children: ReactNode;
}
