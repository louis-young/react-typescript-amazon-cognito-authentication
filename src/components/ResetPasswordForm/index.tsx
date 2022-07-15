import type { FormEvent } from "react";
import { useState } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { SendPasswordResetEmailFormProps } from "./types";

export const ResetPasswordForm = ({
  onSubmit,
  isSubmitting,
  errorMessage,
}: SendPasswordResetEmailFormProps) => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleEmailAddressChange = (newEmailAddress: string) => {
    setEmailAddress(newEmailAddress);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ emailAddress });
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
          type="email"
          name="email-address"
          id="email-address"
          value={emailAddress}
          onValueChange={handleEmailAddressChange}
          isDisabled={isSubmitting}
          isRequired
          hasAutoFocus
        />

        <Spacer />

        <Button type="submit" isLoading={isSubmitting}>
          Reset Password
        </Button>
      </form>
    </>
  );
};
