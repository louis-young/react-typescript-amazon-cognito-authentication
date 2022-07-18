export interface SendPasswordResetEmailFormProps {
  emailAddress: string;
  onEmailAddressChange: (newEmailAddress: string) => void;
  onSubmit: ({ emailAddress }: { emailAddress: string }) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
