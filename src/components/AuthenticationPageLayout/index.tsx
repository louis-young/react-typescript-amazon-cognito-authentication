import blur from "../../assets/images/blur.jpg";
import type { AuthenticationPageLayoutProps } from "./types";

export const AuthenticationPageLayout = ({
  children,
}: AuthenticationPageLayoutProps) => {
  return (
    <section className="max-h-screen min-h-screen overflow-y-scroll bg-lightest dark:bg-dark md:grid md:grid-cols-2 md:items-center md:justify-center">
      <article className="m-auto w-full max-w-lg p-6 sm:p-12">
        {children}
      </article>

      <figure className="hidden h-full w-full md:block">
        <img
          src={blur}
          alt={process.env.REACT_APP_APPLICATION_NAME}
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  );
};
