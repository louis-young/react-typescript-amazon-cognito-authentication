import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Hyperlink } from "../../components/Hyperlink";
import { Logo } from "../../components/Logo";
import { SignInForm } from "../../components/SignInForm";
import { Spacer } from "../../components/Spacer";
import { Title } from "../../components/Title";
import { pagePaths } from "../../constants/pagePaths";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import { authenticationService } from "../../services/authentication";
import type {
  CustomCognitoUser,
  SignInParameters,
} from "../../services/authentication/types";

export const SignInPage = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthenticationContext();

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

  const handleSignInFormSubmit = ({
    emailAddress,
    password,
  }: SignInParameters) => {
    signIn(
      { emailAddress, password },
      {
        onSuccess: (user) => {
          setUser(user);

          navigate(pagePaths.dashboard);
        },
        onError: (error) => {
          const isUserNotConfirmedException =
            error.name === "UserNotConfirmedException";

          if (isUserNotConfirmedException) {
            toast.success(
              `A verification code has been sent to ${emailAddress}.`,
            );

            navigate(
              `${pagePaths.verifyEmailAddress}/?emailAddress=${emailAddress}`,
            );
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
        <Hyperlink link={pagePaths.signUp}>Sign up</Hyperlink>.
      </p>

      <Spacer size="small" />

      <p>
        Forgotten your password?{" "}
        <Hyperlink link={pagePaths.resetPassword}>Reset password</Hyperlink>.
      </p>

      <Spacer size="large" />

      <SignInForm
        onSubmit={handleSignInFormSubmit}
        isSubmitting={isSigningIn}
        errorMessage={signInError?.message}
      />
    </AuthenticationPageLayout>
  );
};
