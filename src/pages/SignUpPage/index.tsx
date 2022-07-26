import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import { SignUpForm } from "../../components/SignUpForm";
import { authenticationService } from "../../services/authentication";
import type { SignUpParameters } from "../../services/authentication/types";
import { Spacer } from "../../components/Spacer";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import { Hyperlink } from "../../components/Hyperlink";
import {
  buildSignInPageUrl,
  buildVerifyEmailAddressPageUrl,
} from "../../utilities/url";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

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

  const handleFirstNameChange = (newFirstName: string) => {
    setFirstName(newFirstName);
  };

  const handleLastNameChange = (newLastName: string) => {
    setLastName(newLastName);
  };

  const handleEmailAddressChange = (newEmailAddress: string) => {
    setEmailAddress(newEmailAddress);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

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

          const verifyEmailAddressPageUrl = buildVerifyEmailAddressPageUrl({
            emailAddress,
          });

          navigate(verifyEmailAddressPageUrl);
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
        <Hyperlink link={buildSignInPageUrl()}>Sign in</Hyperlink>.
      </p>

      <Spacer size="large" />

      <SignUpForm
        firstName={firstName}
        onFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        onLastNameChange={handleLastNameChange}
        emailAddress={emailAddress}
        onEmailAddressChange={handleEmailAddressChange}
        password={password}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSignUpFormSubmit}
        isSubmitting={isSigningUp}
        errorMessage={signUpError?.message}
      />
    </AuthenticationPageLayout>
  );
};
