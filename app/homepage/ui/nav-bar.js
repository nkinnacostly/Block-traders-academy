import Buttonwithbg from "@/app/src/components/ui/button-with-bg";
import Buttonwithoutbg from "@/app/src/components/ui/button-without-bg";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import Down from "@/public/assets/img/svg/down.svg";

function Navbar() {
  return (
    <div className="items-center justify-center hidden w-full lg:flex">
      <div className="flex items-center justify-between w-full ">
        <div>
          <Image src={Logo} height={100} width={100} alt="logo" />
        </div>
        <div className="flex items-center space-x-5">
          <Link href={"/"} className="text-white">
            Home
          </Link>
          <Link href={"homepage/about"} className="text-white">
            About Us
          </Link>
          <Link
            href={"homepage/education"}
            className="flex items-center text-white"
          >
            <p>Education Arena</p>
            <span>
              <Image src={Down} alt="carret-down" height={35} width={35} />
            </span>
          </Link>
          <Link
            href={"homepage/trading"}
            className="flex items-center text-white"
          >
            <p>Trading Arena</p>
            <span>
              <Image src={Down} alt="carret-down" height={35} width={35} />
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Buttonwithoutbg Btntext={"Sign in"} />
          <Buttonwithbg btnText={"Create account"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
