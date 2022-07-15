export interface ChangePasswordFormProps {
  onSubmit: ({
    verificationCode,
    newPassword,
  }: {
    verificationCode: string;
    newPassword: string;
  }) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
