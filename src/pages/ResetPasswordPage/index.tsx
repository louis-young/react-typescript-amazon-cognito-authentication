import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ResetPasswordForm } from "../../components/ResetPasswordForm";
import { authenticationService } from "../../services/authentication";
import { Spacer } from "../../components/Spacer";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { Hyperlink } from "../../components/Hyperlink";
import type { SendPasswordResetEmailParameters } from "../../services/authentication/types";
import {
  buildChangePasswordPageUrl,
  buildSignInPageUrl,
} from "../../utilities/url";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const {
    mutate: sendPasswordResetEmail,
    isLoading: isSendingPasswordResetEmail,
    error: sendPasswordResetEmailError,
  } = useMutation<unknown, Error, SendPasswordResetEmailParameters>(
    ({ emailAddress }: SendPasswordResetEmailParameters) =>
      authenticationService.sendPasswordResetEmail({ emailAddress }),
  );

  const handleResetPasswordFormSubmit = ({
    emailAddress,
  }: SendPasswordResetEmailParameters) => {
    sendPasswordResetEmail(
      { emailAddress },
      {
        onSuccess: () => {
          toast.success(
            `A verification code has been sent to ${emailAddress}.`,
          );

          const changePasswordPageUrl = buildChangePasswordPageUrl({
            emailAddress,
          });

          navigate(changePasswordPageUrl);
        },
      },
    );
  };

  return (
    <AuthenticationPageLayout>
      <Logo />

      <Spacer size="large" />

      <Title>Reset Password</Title>

      <Spacer />

      <p>
        Remembered your password?{" "}
        <Hyperlink link={buildSignInPageUrl()}>Sign in</Hyperlink>.
      </p>

      <Spacer size="large" />

      <ResetPasswordForm
        onSubmit={handleResetPasswordFormSubmit}
        isSubmitting={isSendingPasswordResetEmail}
        errorMessage={sendPasswordResetEmailError?.message}
      />
    </AuthenticationPageLayout>
  );
};
