import type { FormEvent } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { SignUpFormProps } from "./types";

export const SignUpForm = ({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  emailAddress,
  onEmailAddressChange,
  password,
  onPasswordChange,
  onSubmit,
  isSubmitting,
  errorMessage,
}: SignUpFormProps) => {
  const handleFirstNameChange = (newFirstName: string) => {
    onFirstNameChange(newFirstName);
  };

  const handleLastNameChange = (newLastName: string) => {
    onLastNameChange(newLastName);
  };

  const handleEmailAddressChange = (newEmailAddress: string) => {
    onEmailAddressChange(newEmailAddress);
  };

  const handlePasswordChange = (newPassword: string) => {
    onPasswordChange(newPassword);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ firstName, lastName, emailAddress, password });
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
          label="First Name"
          name="first-name"
          id="first-name"
          type="text"
          value={firstName}
          onValueChange={handleFirstNameChange}
          isDisabled={isSubmitting}
          isRequired
        />

        <Spacer size="small" />

        <LabelledTextInput
          label="Last Name"
          name="last-name"
          id="last-name"
          type="text"
          value={lastName}
          onValueChange={handleLastNameChange}
          isDisabled={isSubmitting}
          isRequired
        />

        <Spacer size="small" />

        <LabelledTextInput
          label="Email Address"
          name="email-address"
          id="email-address"
          type="email"
          value={emailAddress}
          onValueChange={handleEmailAddressChange}
          isDisabled={isSubmitting}
          isRequired
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
          Sign Up
        </Button>
      </form>
    </>
  );
};
