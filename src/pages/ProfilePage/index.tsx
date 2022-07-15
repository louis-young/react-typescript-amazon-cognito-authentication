import toast from "react-hot-toast";
import { useMutation } from "react-query";
import invariant from "tiny-invariant";
import { ApplicationPageLayout } from "../../components/ApplicationPageLayout";
import { Card } from "../../components/Card";
import { UpdatePasswordForm } from "../../components/UpdatePasswordForm";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import { authenticationService } from "../../services/authentication";
import type { UpdatePasswordParameters } from "../../services/authentication/types";
import { UserDetails } from "../../components/UserDetails";
import { Spacer } from "../../components/Spacer";
import { Subtitle } from "../../components/Subtitle";

export const ProfilePage = () => {
  const { user } = useAuthenticationContext();

  const {
    mutate: updatePassword,
    isLoading: isUpdatingPassword,
    error: updatePasswordError,
  } = useMutation<unknown, Error, UpdatePasswordParameters>(
    ({ user, currentPassword, newPassword }: UpdatePasswordParameters) =>
      authenticationService.updatePassword({
        user,
        currentPassword,
        newPassword,
      }),
  );

  const handleUpdatePasswordFormSubmit = ({
    currentPassword,
    newPassword,
  }: Omit<UpdatePasswordParameters, "user">) => {
    if (!user) {
      invariant(user, "Expected `user` to be defined.");
    }

    updatePassword(
      { user, currentPassword, newPassword },
      {
        onSuccess: () => {
          toast.success("Your password has been updated.");
        },
      },
    );
  };

  invariant(user, "Expected `user` to be defined.");

  return (
    <ApplicationPageLayout pageTitle="Profile">
      <div className="w-1/2">
        <Card>
          <UserDetails
            fullName={`${user.attributes.name} ${user.attributes.family_name}`}
            emailAddress={user.attributes.email}
          />
        </Card>
      </div>

      <Spacer />

      <div className="w-1/2">
        <Card>
          <Subtitle>Update Password</Subtitle>

          <Spacer size="large" />

          <UpdatePasswordForm
            onSubmit={handleUpdatePasswordFormSubmit}
            isSubmitting={isUpdatingPassword}
            errorMessage={updatePasswordError?.message}
          />
        </Card>
      </div>
    </ApplicationPageLayout>
  );
};
