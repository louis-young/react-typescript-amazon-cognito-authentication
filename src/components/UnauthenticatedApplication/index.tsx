import { Navigate, Route, Routes } from "react-router-dom";
import { pagePaths } from "../../constants/pagePaths";
import { SignUpPage } from "../../pages/SignUpPage";
import { VerifyEmailAddressPage } from "../../pages/VerifyEmailAddressPage";
import { SignInPage } from "../../pages/SignInPage";
import { ResetPasswordPage } from "../../pages/ResetPasswordPage";
import { ChangePasswordPage } from "../../pages/ChangePasswordPage";

export const UnauthenticatedApplication = () => {
  return (
    <Routes>
      <Route path={pagePaths.authentication}>
        <Route path={pagePaths.signUp} element={<SignUpPage />} />

        <Route
          path={pagePaths.verifyEmailAddress}
          element={<VerifyEmailAddressPage />}
        />

        <Route path={pagePaths.signIn} element={<SignInPage />} />

        <Route path={pagePaths.resetPassword} element={<ResetPasswordPage />} />

        <Route
          path={pagePaths.changePassword}
          element={<ChangePasswordPage />}
        />
      </Route>

      <Route path="*" element={<Navigate to={pagePaths.signIn} />} />
    </Routes>
  );
};
