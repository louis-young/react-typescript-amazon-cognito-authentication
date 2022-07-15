export interface UpdatePasswordFormProps {
  onSubmit: ({
    currentPassword,
    newPassword,
  }: {
    currentPassword: string;
    newPassword: string;
  }) => void;
  isSubmitting: boolean;
  errorMessage?: string;
}
