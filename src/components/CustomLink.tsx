import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  value: string;
  outline?: boolean;
};

const CustomLink: React.FC<CustomLinkProps> = ({ value, outline }) => {
  return (
    <Link
      href="/"
      className={`py-[10px] px-[25px] rounded-full  hover:opacity-90
      ${outline ? "bg-[transparent]" : "bg-[#18753D]"}
      ${outline ? "border border-[#18753D]" : ""}
      ${outline ? "text-[#505050]" : "text-[#fff]"}
      `}
    >
      {value}
    </Link>
  );
};
export default CustomLink;
