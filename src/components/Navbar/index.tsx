// import Link from "next/link";
// import React from "react";
// import CustomLink from "../CustomLink";
import Image from "next/image";

import { useState } from "react";
import NavLinks from "../NavLinks";

import logo from "../../../public/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import CustomLink from "../CustomLink";
// import NavLinks from "../NavLinks";

// type NavbarProps = {};

// const Navbar: React.FC<NavbarProps> = () => {
//   return (
//     <>
//       <nav className="flex justify-between lg:items-center px-4 lg:px-8 py-4 flex-col items-start gap-4">
//         <div>
//           <Image src={logo} alt="logo" width={120} height={120} />
//         </div>

//         <NavLinks />

//         <div className="lg:hidden">
//           <RxHamburgerMenu size={30} />
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="lg:flex lg:items-center lg:justify-between px-4 lg:px-16 py-4 lg:py-8">
      <div>
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>

      <div className={toggleMenu ? "block" : "hidden lg:block"}>
        <NavLinks />
      </div>

      <div className="items-center gap-4 hidden lg:flex">
        <CustomLink value="Sign In" outline />
        <CustomLink value="Sign Up" />
      </div>

      <div className="btn absolute right-[10px] top-[7px] lg:hidden">
        <RxHamburgerMenu
          size={30}
          onClick={() => setToggleMenu((value) => !value)}
        />
      </div>
    </nav>
  );
}
