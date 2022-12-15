import type { FormEvent } from "react";
import { useState } from "react";
import { LabelledTextInput } from "../LabelledTextInput";
import { Spacer } from "../Spacer";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import type { VerifyEmailAddressFormProps } from "./types";

export const VerifyEmailAddressForm = ({
  onSubmit,
  isSubmitting,
  errorMessage,
}: VerifyEmailAddressFormProps) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerificationCodeChange = (newVerificationCode: string) => {
    setVerificationCode(newVerificationCode);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ verificationCode });
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
        />

        <Spacer />

        <Button type="submit" isLoading={isSubmitting}>
          Verify Email Address
        </Button>
      </form>
    </>
  );
};
