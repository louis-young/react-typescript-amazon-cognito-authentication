import type { FormEvent } from "react";
import { useState } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { SignInFormProps } from "./types";

export const SignInForm = ({
  onSubmit,
  isSubmitting,
  errorMessage,
}: SignInFormProps) => {
  const [emailAddress, setEmailAddress] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailAddressChange = (newEmailAddress: string) => {
    setEmailAddress(newEmailAddress);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ emailAddress, password });
  };

  return (
    <>
      {errorMessage && (
        <>
          <ErrorMessage>{errorMessage}</ErrorMessage>

          <Spacer />
        </>
      )}

      <form onSubmit={handleSubmit}>
        <LabelledTextInput
          label="Email Address"
          name="email-address"
          id="email-address"
          type="email"
          value={emailAddress}
          onValueChange={handleEmailAddressChange}
          isDisabled={isSubmitting}
          isRequired
          hasAutoFocus
        />

        <Spacer size="small" />

        <LabelledTextInput
          label="Password"
          name="password"
          id="password"
          type="password"
          value={password}
          onValueChange={handlePasswordChange}
          isDisabled={isSubmitting}
          isRequired
        />

        <Spacer />

        <Button type="submit" isLoading={isSubmitting}>
          Sign In
        </Button>
      </form>
    </>
  );
};
