import type { CognitoUser } from "@aws-amplify/auth";

type CustomCognitoAttributes = {
  email: string;
  name: string;
  family_name: string;
};

export type CustomCognitoUser = CognitoUser & {
  attributes: CustomCognitoAttributes;
};

export interface AuthenticationCredentials {
  emailAddress: string;
  password: string;
}

export interface SignUpParameters extends AuthenticationCredentials {
  firstName: string;
  lastName: string;
}

export interface VerifyEmailAddressParameters {
  emailAddress: string;
  verificationCode: string;
}

export type SignInParameters = AuthenticationCredentials;

export interface SendPasswordResetEmailParameters {
  emailAddress: string;
}

export interface ChangePasswordParameters {
  emailAddress: string;
  verificationCode: string;
  newPassword: string;
}

export interface UpdatePasswordParameters {
  user: CustomCognitoUser;
  currentPassword: string;
  newPassword: string;
}
