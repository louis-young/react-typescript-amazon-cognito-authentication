import { Card } from "../Card";
import { Spacer } from "../Spacer";

const LargeContentSkeleton = () => (
  <div className="h-52 w-full animate-pulse rounded-lg bg-light dark:bg-darker" />
);

const SmallParagraphSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="h-4 w-full animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-11/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-10/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-9/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
  </div>
);

const LargeParagraphSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="h-4 w-full animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-11/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-10/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-9/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
    <div className="h-4 w-8/12 animate-pulse rounded-lg bg-light dark:bg-darker" />
  </div>
);

export const SkeletonApplicationPage = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-5">
        <Card>
          <SmallParagraphSkeleton />

          <Spacer />

          <LargeContentSkeleton />
        </Card>
      </div>
      <div className="col-span-7">
        <Card>
          <LargeContentSkeleton />

          <Spacer />

          <SmallParagraphSkeleton />
        </Card>
      </div>

      <div className="col-span-7">
        <Card>
          <LargeParagraphSkeleton />
        </Card>
      </div>
      <div className="col-span-5">
        <Card>
          <LargeParagraphSkeleton />
        </Card>
      </div>
    </div>
  );
};
