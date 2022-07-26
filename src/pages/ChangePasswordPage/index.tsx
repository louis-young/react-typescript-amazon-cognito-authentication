import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { ChangePasswordForm } from "../../components/ChangePasswordForm";
import { authenticationService } from "../../services/authentication";
import { Spacer } from "../../components/Spacer";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { Hyperlink } from "../../components/Hyperlink";
import type { ChangePasswordParameters } from "../../services/authentication/types";
import { buildSignInPageUrl } from "../../utilities/url";

export const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const [searchParameters] = useSearchParams();

  const emailAddress = searchParameters.get("emailAddress")!;

  const {
    mutate: changePassword,
    isLoading: isResettingPassword,
    error: changePasswordError,
  } = useMutation<unknown, Error, ChangePasswordParameters>(
    ({
      emailAddress,
      verificationCode,
      newPassword,
    }: ChangePasswordParameters) =>
      authenticationService.changePassword({
        emailAddress,
        verificationCode,
        newPassword,
      }),
  );

  const handleChangePasswordFormSubmit = ({
    verificationCode,
    newPassword,
  }: Omit<ChangePasswordParameters, "emailAddress">) => {
    changePassword(
      {
        emailAddress,
        verificationCode,
        newPassword,
      },
      {
        onSuccess: () => {
          toast.success("Your password has been reset.");

          const signInPageUrl = buildSignInPageUrl({
            emailAddress,
          });

          navigate(signInPageUrl);
        },
      },
    );
  };

  return (
    <AuthenticationPageLayout>
      <Logo />

      <Spacer size="large" />

      <Title>Change Password</Title>

      <Spacer />

      <p>
        Remembered your password?{" "}
        <Hyperlink link={buildSignInPageUrl({ emailAddress })}>
          Sign in
        </Hyperlink>
        .
      </p>

      <Spacer size="large" />

      <ChangePasswordForm
        onSubmit={handleChangePasswordFormSubmit}
        isSubmitting={isResettingPassword}
        errorMessage={changePasswordError?.message}
      />
    </AuthenticationPageLayout>
  );
};
