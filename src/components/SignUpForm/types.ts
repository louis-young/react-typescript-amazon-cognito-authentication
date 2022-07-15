import type { SignUpParameters } from "../../services/authentication/types";

export interface SignUpFormProps {
  onSubmit: ({
    firstName,
    lastName,
    emailAddress,
    password,
  }: SignUpParameters) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
