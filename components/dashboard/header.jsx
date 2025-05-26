// import Buttonwithbg from "@/components/ui/button-with-bg";
// import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserIcon } from "lucide-react";
import { useUserStore } from "@/store/store";

function DashboardHeader() {
  const { loggedInUserDetails } = useUserStore();
  console.log(loggedInUserDetails);
  return (
    <>
      <div className="items-center justify-center hidden w-full h-full p-4 mb-2 lg:flex">
        <div className="flex items-center w-full justify-evenly ">
          <div>
            <Image src={Logo} height={100} width={100} alt="logo" />
          </div>
          <div className="flex items-center space-x-5">
            <Link href={"/"} className="">
              Home
            </Link>
            <Link href={"/about"} className="">
              About Us
            </Link>
            <Link href={"/education"} className="flex items-center ">
              <p>Education Arena</p>
              <span>
                <Image src={Down} alt="carret-down" height={35} width={35} />
              </span>
            </Link>
            <Link href={"/trading"} className="flex items-center ">
              <p>Trading Arena</p>
              <span>
                <Image src={Down} alt="carret-down" height={35} width={35} />
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5">
            {/* <Buttonwithoutbg Btntext={"Sign in"} /> */}
            {/* <Buttonwithbg btnText={"Create account"} /> */}
            <Avatar>
              <div className="w-20 h-20 border-2 rounded-full flex justify-center items-center">
                <AvatarImage src={loggedInUserDetails?.image_url} />
                <AvatarFallback>
                  <UserIcon className="w-20 h-20" />
                </AvatarFallback>
              </div>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
