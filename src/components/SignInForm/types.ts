import type { AuthenticationCredentials } from "../../services/authentication/types";

export interface SignInFormProps {
  onSubmit: ({ emailAddress, password }: AuthenticationCredentials) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
