import { PuffLoader } from "react-spinners";

export const FullscreenLoadingOverlay = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-lightest dark:bg-dark">
      <PuffLoader size="6rem" color="#2563eb" />
    </div>
  );
};
