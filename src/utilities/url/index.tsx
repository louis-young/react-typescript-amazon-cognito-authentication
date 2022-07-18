import { createSearchParams } from "react-router-dom";
import { pagePaths } from "../../constants/pagePaths";

export const buildEntireUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
};

export const buildSignUpPageUrl = ({
  emailAddress,
}: {
  emailAddress?: string;
} = {}) => {
  if (emailAddress) {
    const searchParameters = createSearchParams({ emailAddress });

    return `${pagePaths.signUp}/?${searchParameters}`;
  }

  return pagePaths.signUp;
};

export const buildVerifyEmailAddressPageUrl = ({
  emailAddress,
}: {
  emailAddress: string;
}) => {
  const searchParameters = createSearchParams({ emailAddress });

  return `${pagePaths.verifyEmailAddress}/?${searchParameters}`;
};

export const buildSignInPageUrl = ({
  emailAddress,
}: {
  emailAddress?: string;
} = {}) => {
  if (emailAddress) {
    const searchParameters = createSearchParams({ emailAddress });

    return `${pagePaths.signIn}/?${searchParameters}`;
  }

  return pagePaths.signIn;
};

export const buildResetPasswordPageUrl = ({
  emailAddress,
}: {
  emailAddress?: string;
}) => {
  if (emailAddress) {
    const searchParameters = createSearchParams({ emailAddress });

    return `${pagePaths.resetPassword}/?${searchParameters}`;
  }

  return pagePaths.resetPassword;
};

export const buildChangePasswordPageUrl = ({
  emailAddress,
}: {
  emailAddress: string;
}) => {
  const searchParameters = createSearchParams({ emailAddress });

  return `${pagePaths.changePassword}/?${searchParameters}`;
};

export const buildDashboardPageUrl = () => {
  return pagePaths.dashboard;
};

export const buildTestPageUrl = () => {
  return pagePaths.test;
};

export const buildProfilePageUrl = () => {
  return pagePaths.profile;
};

export const buildSettingsPageUrl = () => {
  return pagePaths.settings;
};
