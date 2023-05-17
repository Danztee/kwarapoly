import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import NavLinks from "../NavLinks";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="px-4 lg:px-16 py-4 lg:py-8">
      <div
        style={{
          borderTop: "solid 1px #505050",
          paddingBottom: "3rem",
        }}
      ></div>
      <div className="flex lg:flex-row lg:items-center justify-between flex-col items-start gap-10 lg:gap-0">
        <div>
          <Image src={logo} alt="logo" width={120} height={120} />
        </div>

        <NavLinks />

        <div className="flex items-center gap-4">
          <Link href="/">
            <AiFillInstagram
              color="#18753D"
              size="30"
              className="hover:opacity-70"
            />
          </Link>

          <Link href="/">
            <BsFacebook
              color="#18753D"
              size="25"
              className="hover:opacity-70"
            />
          </Link>

          <Link href="/">
            <AiFillTwitterCircle
              color="#18753D"
              size="30"
              className="hover:opacity-70"
            />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-[#505050] text-center mt-10">
          &#169; Copyright 2023 Kwarapoly All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
