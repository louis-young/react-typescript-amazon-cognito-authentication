import type { FormEvent } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { SendPasswordResetEmailFormProps } from "./types";

export const ResetPasswordForm = ({
  emailAddress,
  onEmailAddressChange,
  onSubmit,
  isSubmitting,
  errorMessage,
}: SendPasswordResetEmailFormProps) => {
  const handleEmailAddressChange = (newEmailAddress: string) => {
    onEmailAddressChange(newEmailAddress);
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
        />

        <Spacer />

        <Button type="submit" isLoading={isSubmitting}>
          Reset Password
        </Button>
      </form>
    </>
  );
};
