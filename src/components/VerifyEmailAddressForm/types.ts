export interface VerifyEmailAddressFormProps {
  onSubmit: ({ verificationCode }: { verificationCode: string }) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
