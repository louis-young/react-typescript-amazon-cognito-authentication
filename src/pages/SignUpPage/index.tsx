import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { SignUpForm } from "../../components/SignUpForm";
import { authenticationService } from "../../services/authentication";
import { pagePaths } from "../../constants/pagePaths";
import type { SignUpParameters } from "../../services/authentication/types";
import { Spacer } from "../../components/Spacer";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { Hyperlink } from "../../components/Hyperlink";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    mutate: signUp,
    isLoading: isSigningUp,
    error: signUpError,
  } = useMutation<unknown, Error, SignUpParameters>(
    ({ firstName, lastName, emailAddress, password }: SignUpParameters) =>
      authenticationService.signUp({
        firstName,
        lastName,
        emailAddress,
        password,
      }),
  );

  const handleSignUpFormSubmit = ({
    firstName,
    lastName,
    emailAddress,
    password,
  }: SignUpParameters) => {
    signUp(
      { firstName, lastName, emailAddress, password },
      {
        onSuccess: () => {
          toast.success(
            `A verification code has been sent to ${emailAddress}.`,
          );

          navigate(
            `${pagePaths.verifyEmailAddress}/?emailAddress=${emailAddress}`,
          );
        },
      },
    );
  };

  return (
    <AuthenticationPageLayout>
      <Logo />

      <Spacer size="large" />

      <Title>Sign Up</Title>

      <Spacer />

      <p>
        Already have an account?{" "}
        <Hyperlink link={pagePaths.signIn}>Sign in</Hyperlink>.
      </p>

      <Spacer size="large" />

      <SignUpForm
        onSubmit={handleSignUpFormSubmit}
        isSubmitting={isSigningUp}
        errorMessage={signUpError?.message}
      />
    </AuthenticationPageLayout>
  );
};
