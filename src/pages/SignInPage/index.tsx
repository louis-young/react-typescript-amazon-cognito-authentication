import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Hyperlink } from "../../components/Hyperlink";
import { Logo } from "../../components/Logo";
import { SignInForm } from "../../components/SignInForm";
import { Spacer } from "../../components/Spacer";
import { Title } from "../../components/Title";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import { authenticationService } from "../../services/authentication";
import type {
  CustomCognitoUser,
  SignInParameters,
} from "../../services/authentication/types";
import {
  buildDashboardPageUrl,
  buildResetPasswordPageUrl,
  buildSignUpPageUrl,
  buildVerifyEmailAddressPageUrl,
} from "../../utilities/url";

export const SignInPage = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthenticationContext();

  const [searchParameters] = useSearchParams();

  const initialEmailAddress = searchParameters.get("emailAddress");

  const [emailAddress, setEmailAddress] = useState(initialEmailAddress ?? "");

  const [password, setPassword] = useState("");

  const {
    mutate: signIn,
    isLoading: isSigningIn,
    error: signInError,
  } = useMutation<CustomCognitoUser, Error, SignInParameters>(
    ({ emailAddress, password }: SignInParameters) =>
      authenticationService.signIn({
        emailAddress,
        password,
      }),
  );

  const handleEmailAddressChange = (newEmailAddress: string) => {
    setEmailAddress(newEmailAddress);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleSignInFormSubmit = ({
    emailAddress,
    password,
  }: SignInParameters) => {
    signIn(
      { emailAddress, password },
      {
        onSuccess: (user) => {
          setUser(user);

          const dashboardPageUrl = buildDashboardPageUrl();

          navigate(dashboardPageUrl);
        },
        onError: (error) => {
          const isUserNotConfirmedException =
            error.name === "UserNotConfirmedException";

          if (isUserNotConfirmedException) {
            toast.success(
              `A verification code has been sent to ${emailAddress}.`,
            );

            const verifyEmailAddressPageUrl = buildVerifyEmailAddressPageUrl({
              emailAddress,
            });

            navigate(verifyEmailAddressPageUrl);
          }
        },
      },
    );
  };

  return (
    <AuthenticationPageLayout>
      <Logo />

      <Spacer size="large" />

      <Title>Sign In</Title>

      <Spacer />

      <p>
        Don't have an account?{" "}
        <Hyperlink link={buildSignUpPageUrl({ emailAddress })}>
          Sign up
        </Hyperlink>
        .
      </p>

      <Spacer size="small" />

      <p>
        Forgotten your password?{" "}
        <Hyperlink link={buildResetPasswordPageUrl({ emailAddress })}>
          Reset password
        </Hyperlink>
        .
      </p>

      <Spacer size="large" />

      <SignInForm
        emailAddress={emailAddress}
        onEmailAddressChange={handleEmailAddressChange}
        password={password}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSignInFormSubmit}
        isSubmitting={isSigningIn}
        errorMessage={signInError?.message}
      />
    </AuthenticationPageLayout>
  );
};
