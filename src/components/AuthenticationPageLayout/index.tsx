import blur from "../../assets/images/blur.jpg";
import type { AuthenticationPageLayoutProps } from "./types";

export const AuthenticationPageLayout = ({
  children,
}: AuthenticationPageLayoutProps) => {
  return (
    <section className="min-h-screen max-h-screen overflow-y-scroll md:grid md:grid-cols-2 md:items-center md:justify-center bg-lightest dark:bg-dark">
      <article className="p-6 sm:p-12 w-full max-w-lg m-auto">
        {children}
      </article>

      <figure className="h-full w-full hidden md:block">
        <img
          src={blur}
          alt={process.env.REACT_APP_APPLICATION_NAME}
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  );
};
