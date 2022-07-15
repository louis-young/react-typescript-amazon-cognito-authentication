import placeholderUser from "../../assets/images/user.png";
import type { UserDetailsProps } from "./types";

export const UserDetails = ({
  imageSource = placeholderUser,
  fullName,
  emailAddress,
}: UserDetailsProps) => {
  return (
    <figure className="flex min-w-0 flex-1 items-center gap-4">
      <img src={imageSource} alt={fullName} className="h-12 w-12 rounded-lg" />

      <figcaption className="min-w-0 flex-1 text-left">
        <span className="block truncate font-medium opacity-90">
          {fullName}
        </span>

        <span className="block truncate text-sm font-light opacity-75">
          {emailAddress}
        </span>
      </figcaption>
    </figure>
  );
};
