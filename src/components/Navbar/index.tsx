import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../public/logo.png";
import CustomLink from "../CustomLink";
import NavLinks from "../NavLinks";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="lg:flex lg:items-center lg:justify-between px-4 lg:px-16 py-4 lg:py-8">
      <div className="mb-4 lg:mb-0">
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>

      <div className={toggleMenu ? "block" : "hidden lg:block"}>
        <NavLinks />
      </div>

      <div className="items-center gap-4 hidden lg:flex">
        <CustomLink
          value="Sign In"
          outline
          to={"https://assignment-manager.vercel.app/"}
        />
        <CustomLink
          value="Sign Up"
          to={"https://assignment-manager.vercel.app/"}
        />
      </div>

      <div className="btn absolute right-[10px] top-[16px] lg:hidden">
        <RxHamburgerMenu
          size={30}
          onClick={() => setToggleMenu((value) => !value)}
        />
      </div>
    </nav>
  );
}
