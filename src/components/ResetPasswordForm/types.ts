export interface SendPasswordResetEmailFormProps {
  onSubmit: ({ emailAddress }: { emailAddress: string }) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
