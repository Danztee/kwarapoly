import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  value: string;
  outline?: boolean;
  to: Url;
};

const CustomLink: React.FC<CustomLinkProps> = ({ value, outline, to }) => {
  return (
    <Link
      href={to ?? "/"}
      className={`px-[25px] rounded-full  hover:opacity-90
      ${outline ? "bg-[transparent]" : "bg-[#18753D]"}
      ${outline ? "border border-[#18753D]" : ""}
      ${outline ? "text-[#505050]" : "text-[#fff]"}
      ${value === "Sign In" || value === "Sign Up" ? "py-[10px]" : "py-[15px]"}
      `}
    >
      {value}
    </Link>
  );
};
export default CustomLink;
