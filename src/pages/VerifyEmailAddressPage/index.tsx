import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { authenticationService } from "../../services/authentication";
import { VerifyEmailAddressForm } from "../../components/VerifyEmailAddressForm";
import { Spacer } from "../../components/Spacer";
import { Hyperlink } from "../../components/Hyperlink";
import { AuthenticationPageLayout } from "../../components/AuthenticationPageLayout";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title";
import type { VerifyEmailAddressParameters } from "../../services/authentication/types";
import { buildSignInPageUrl } from "../../utilities/url";

export const VerifyEmailAddressPage = () => {
  const navigate = useNavigate();

  const [searchParameters] = useSearchParams();

  const emailAddress = searchParameters.get("emailAddress")!;

  const {
    mutate: verifyEmailAddress,
    isLoading: isVerifyingEmailAddress,
    error: verifyingEmailAddressError,
  } = useMutation<unknown, Error, VerifyEmailAddressParameters>(
    ({ emailAddress, verificationCode }: VerifyEmailAddressParameters) =>
      authenticationService.verifyEmailAddress({
        emailAddress,
        verificationCode,
      }),
  );

  const handleVerifyEmailAddressFormSubmit = ({
    verificationCode,
  }: {
    verificationCode: string;
  }) => {
    verifyEmailAddress(
      { emailAddress, verificationCode },
      {
        onSuccess: () => {
          toast.success("Your email address has been verified.");

          const signInPageUrl = buildSignInPageUrl();

          navigate(signInPageUrl);
        },
      },
    );
  };

  return (
    <AuthenticationPageLayout>
      <Logo />

      <Spacer size="large" />

      <Title>Verify Email Address</Title>

      <Spacer />

      <p>
        Already have an account?{" "}
        <Hyperlink link={buildSignInPageUrl()}>Sign in</Hyperlink>.
      </p>

      <Spacer size="large" />

      <VerifyEmailAddressForm
        onSubmit={handleVerifyEmailAddressFormSubmit}
        isSubmitting={isVerifyingEmailAddress}
        errorMessage={verifyingEmailAddressError?.message}
      />
    </AuthenticationPageLayout>
  );
};
