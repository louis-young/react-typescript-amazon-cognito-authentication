import { PuffLoader } from "react-spinners";

export const FullscreenLoadingOverlay = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-lightest dark:bg-dark">
      <PuffLoader size="6rem" color="#2563eb" />
    </div>
  );
};
