import { Auth } from "@aws-amplify/auth";
import type {
  ChangePasswordParameters,
  SendPasswordResetEmailParameters,
  SignInParameters,
  SignUpParameters,
  UpdatePasswordParameters,
  VerifyEmailAddressParameters,
} from "./types";

const signUp = ({
  firstName,
  lastName,
  emailAddress,
  password,
}: SignUpParameters) => {
  return Auth.signUp({
    username: emailAddress,
    password,
    attributes: {
      email: emailAddress,
      name: firstName,
      family_name: lastName,
    },
  });
};

const verifyEmailAddress = ({
  emailAddress,
  verificationCode,
}: VerifyEmailAddressParameters) => {
  return Auth.confirmSignUp(emailAddress, verificationCode);
};

const signIn = ({ emailAddress, password }: SignInParameters) => {
  return Auth.signIn({
    username: emailAddress,
    password,
  });
};

const signOut = () => {
  return Auth.signOut();
};

const getAuthenticatedUser = () => {
  return Auth.currentAuthenticatedUser({ bypassCache: true });
};

const getCurrentSession = () => {
  return Auth.currentSession();
};

const sendPasswordResetEmail = ({
  emailAddress,
}: SendPasswordResetEmailParameters) => {
  return Auth.forgotPassword(emailAddress);
};

const changePassword = ({
  emailAddress,
  verificationCode,
  newPassword,
}: ChangePasswordParameters) => {
  return Auth.forgotPasswordSubmit(emailAddress, verificationCode, newPassword);
};

const updatePassword = ({
  user,
  currentPassword,
  newPassword,
}: UpdatePasswordParameters) => {
  return Auth.changePassword(user, currentPassword, newPassword);
};

export const authenticationService = {
  signUp,
  verifyEmailAddress,
  signIn,
  signOut,
  getAuthenticatedUser,
  getCurrentSession,
  sendPasswordResetEmail,
  changePassword,
  updatePassword,
};
