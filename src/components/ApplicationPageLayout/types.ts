import type { ReactNode } from "react";

export interface ApplicationPageLayoutProps {
  pageTitle: string;
  isPageLoading?: boolean;
  hasPageError?: boolean;
  children: ReactNode | ReactNode[];
}
