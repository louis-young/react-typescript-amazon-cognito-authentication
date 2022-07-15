import type { FormEvent } from "react";
import { useState } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { ChangePasswordFormProps } from "./types";

export const ChangePasswordForm = ({
  onSubmit,
  isSubmitting,
  errorMessage,
}: ChangePasswordFormProps) => {
  const [verificationCode, setVerificationCode] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const handleVerificationCodeChange = (newVerificationCode: string) => {
    setVerificationCode(newVerificationCode);
  };

  const handleNewPasswordChange = (newNewPassword: string) => {
    setNewPassword(newNewPassword);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ verificationCode, newPassword });
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
          label="Verification Code"
          name="verification-code"
          id="verification-code"
          type="text"
          value={verificationCode}
          onValueChange={handleVerificationCodeChange}
          isDisabled={isSubmitting}
          isRequired
          hasAutoFocus
        />

        <Spacer size="small" />

        <LabelledTextInput
          label="New Password"
          name="new-password"
          id="new-password"
          type="password"
          value={newPassword}
          onValueChange={handleNewPasswordChange}
          isDisabled={isSubmitting}
          isRequired
        />

        <Spacer />

        <Button type="submit" isLoading={isSubmitting}>
          Change Password
        </Button>
      </form>
    </>
  );
};
