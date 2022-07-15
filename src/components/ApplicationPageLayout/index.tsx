import { ErrorMessage } from "../ErrorMessage";
import { SkeletonApplicationPage } from "../SkeletonApplicationPage";
import { Spacer } from "../Spacer";
import { Title } from "../Title";
import type { ApplicationPageLayoutProps } from "./types";

export const ApplicationPageLayout = ({
  pageTitle,
  isPageLoading = false,
  hasPageError = false,
  children,
}: ApplicationPageLayoutProps) => {
  return (
    <section className="p-12 max-h-screen overflow-y-scroll">
      <header>
        <Title>{pageTitle}</Title>
      </header>

      <Spacer size="large" />

      {isPageLoading ? (
        <SkeletonApplicationPage />
      ) : hasPageError ? (
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
      ) : (
        children
      )}
    </section>
  );
};
