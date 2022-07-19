import type { SignUpParameters } from "../../services/authentication/types";

export interface SignUpFormProps {
  firstName: string;
  onFirstNameChange: (newFirstName: string) => void;
  lastName: string;
  onLastNameChange: (newLastName: string) => void;
  emailAddress: string;
  onEmailAddressChange: (newEmailAddress: string) => void;
  password: string;
  onPasswordChange: (newPassword: string) => void;
  onSubmit: ({
    firstName,
    lastName,
    emailAddress,
    password,
  }: SignUpParameters) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
