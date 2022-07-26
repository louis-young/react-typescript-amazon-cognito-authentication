import { useQuery } from "@tanstack/react-query";
import { ApplicationPageLayout } from "../../components/ApplicationPageLayout";
import { Card } from "../../components/Card";
import { useAuthenticationContext } from "../../hooks/context/useAuthenticationContext";
import type { TestResponse } from "../../types/api";
import { get } from "../../utilities/http";
import { getTestQueryKey } from "../../utilities/queryKeys";
import { buildEntireUrl } from "../../utilities/url";

export const TestPage = () => {
  const { getJwtToken } = useAuthenticationContext();

  const endpoint = "/events";

  const url = buildEntireUrl(endpoint);

  const queryKey = getTestQueryKey();

  const {
    data: eventNamesData,
    isLoading: isLoadingEventNames,
    isError: hasEventNamesError,
  } = useQuery<TestResponse, Error>(queryKey, async () => {
    const jwtToken = await getJwtToken();

    return get<TestResponse>(url, jwtToken);
  });

  return (
    <ApplicationPageLayout
      pageTitle="Test"
      isPageLoading={isLoadingEventNames}
      hasPageError={hasEventNamesError}
    >
      {eventNamesData && (
        <Card>
          <pre>{JSON.stringify(eventNamesData.eventNames, null, 2)}</pre>
        </Card>
      )}
    </ApplicationPageLayout>
  );
};
