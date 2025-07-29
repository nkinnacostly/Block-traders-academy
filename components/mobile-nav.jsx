"use client";

import React, { useState } from "react";

// import Down from "@/public/assets/img/svg/down.svg";
import { FaSortDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo-black.png";
import { PiSquaresFourFill } from "react-icons/pi";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

// import { motion } from "framer-motion";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:hidden xl:hidden 2xl:hidden">
      <div className=" bg-[#f9eeb2] px-[2rem] py-3 flex items-center justify-between lg:hidden xl:hidden 2xl:hidden">
        <div>
          <Image src={Logo} height={50} width={50} alt="logo" />
        </div>
        <div>
          <PiSquaresFourFill size={45} onClick={toggleMenu} />
        </div>
      </div>
      {isOpen ? (
        <div className="border-2 py-4 my-4 ">
          <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
          <nav className="menu">
            <div className="flex items-center flex-col space-y-5">
              <Link href={"/"} className="">
                Home
              </Link>
              <Link href={"/about"} className="">
                About Us
              </Link>
              <Link
                href={"/education"}
                className="flex items-center   justify-center space-x-3"
              >
                <p>Education Arena</p>

                <FaSortDown size={30} className="mb-3" />
              </Link>
              <Link
                href={"/trading"}
                className="flex items-center  justify-center space-x-3"
              >
                <p>Trading Arena</p>
                <FaSortDown size={30} className="mb-3" />
              </Link>
              <Link
                href={"/copy-trade"}
                className="flex items-center  justify-center space-x-3"
              >
                <p>Copy Trading</p>
                <FaSortDown size={30} className="mb-3" />
              </Link>
            </div>
            <div className="flex items-center justify-center flex-col space-y-5 mt-3">
              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" })
                )}
                href={"/login"}
              >
                Sign in
              </Link>

              <Link
                className={cn(buttonVariants({ size: "lg" }))}
                href={"/sign-up"}
              >
                Create Account
                {/* Create campaign <PlusCircledIcon /> */}
              </Link>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
      {/* <motion.div
        className={`menu ${isOpen ? "block" : "hidden"} `}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Your menu items go here
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        Add more menu items as needed
      </motion.div> */}
    </div>
  );
}

export default MobileNav;
