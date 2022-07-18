import type { AuthenticationCredentials } from "../../services/authentication/types";

export interface SignInFormProps {
  emailAddress: string;
  onEmailAddressChange: (newEmailAddress: string) => void;
  password: string;
  onPasswordChange: (newPassword: string) => void;
  onSubmit: ({ emailAddress, password }: AuthenticationCredentials) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
