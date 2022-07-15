import placeholderUser from "../../assets/images/user.png";
import type { UserDetailsProps } from "./types";

export const UserDetails = ({
  imageSource = placeholderUser,
  fullName,
  emailAddress,
}: UserDetailsProps) => {
  return (
    <figure className="flex items-center gap-4 flex-1 min-w-0">
      <img src={imageSource} alt={fullName} className="w-12 h-12 rounded-lg" />

      <figcaption className="text-left flex-1 min-w-0">
        <span className="block font-medium opacity-90 truncate">
          {fullName}
        </span>

        <span className="block text-sm font-light opacity-75 truncate">
          {emailAddress}
        </span>
      </figcaption>
    </figure>
  );
};
