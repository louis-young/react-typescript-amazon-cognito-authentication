import { lazy, Suspense } from "react";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import { FullscreenLoadingOverlay } from "../FullscreenLoadingOverlay";

const AuthenticatedApplication = lazy(() =>
  import("../AuthenticatedApplication").then(
    ({ AuthenticatedApplication }) => ({
      default: AuthenticatedApplication,
    }),
  ),
);

const UnauthenticatedApplication = lazy(() =>
  import("../UnauthenticatedApplication").then(
    ({ UnauthenticatedApplication }) => ({
      default: UnauthenticatedApplication,
    }),
  ),
);

export const Application = () => {
  const { isDeterminingAuthenticationStatus, user } =
    useAuthenticationContext();

  if (isDeterminingAuthenticationStatus) {
    return <FullscreenLoadingOverlay />;
  }

  return (
    <Suspense fallback={<FullscreenLoadingOverlay />}>
      {user ? <AuthenticatedApplication /> : <UnauthenticatedApplication />}
    </Suspense>
  );
};
