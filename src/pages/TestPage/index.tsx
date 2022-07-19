import { useQuery } from "react-query";
import { ApplicationPageLayout } from "../../components/ApplicationPageLayout";
import { Card } from "../../components/Card";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import type { TestResponse } from "../../types/api";
import { get } from "../../utilities/http";
import { getTestQueryKey } from "../../utilities/queryKeys";
import { buildEntireUrl } from "../../utilities/url";

export const TestPage = () => {
  const { getJwtToken } = useAuthenticationContext();

  const endpoint = "/event-performances/22/DT2K";

  const url = buildEntireUrl(endpoint);

  const queryKey = getTestQueryKey();

  const {
    data: eventPerformancesData,
    isLoading: isLoadingEventPerformances,
    isError: hasEventPerformancesError,
  } = useQuery<TestResponse, Error>(queryKey, async () => {
    const jwtToken = await getJwtToken();

    return get<TestResponse>(url, jwtToken);
  });

  return (
    <ApplicationPageLayout
      pageTitle="Test"
      isPageLoading={isLoadingEventPerformances}
      hasPageError={hasEventPerformancesError}
    >
      {eventPerformancesData && (
        <Card>
          <pre>{JSON.stringify(eventPerformancesData, null, 2)}</pre>
        </Card>
      )}
    </ApplicationPageLayout>
  );
};
