import type { FormEvent } from "react";
import { useState } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { UpdatePasswordFormProps } from "./types";

export const UpdatePasswordForm = ({
  onSubmit,
  isSubmitting,
  errorMessage,
}: UpdatePasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const handleCurrentPasswordChange = (newCurrentPassword: string) => {
    setCurrentPassword(newCurrentPassword);
  };

  const handleNewPasswordChange = (newNewPassword: string) => {
    setNewPassword(newNewPassword);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ currentPassword, newPassword });
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
          label="Current Password"
          name="current-password"
          id="current-password"
          type="password"
          value={currentPassword}
          onValueChange={handleCurrentPasswordChange}
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
          Update Password
        </Button>
      </form>
    </>
  );
};
