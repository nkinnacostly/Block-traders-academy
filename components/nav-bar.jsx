import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

// import { useRouter } from "next/navigation";

function Navbar() {
  // const router = useRouter();

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
          <Link href={"/about"} className="text-white">
            About Us
          </Link>
          <Link href={"/education"} className="flex items-center text-white">
            <p>Education Arena</p>
            <span>
              <Image src={Down} alt="carret-down" height={35} width={35} />
            </span>
          </Link>
          <Link href={"/trading"} className="flex items-center text-white">
            <p>Trading Arena</p>
            <span>
              <Image src={Down} alt="carret-down" height={35} width={35} />
            </span>
          </Link>
          <Link href={"/copy-trade"} className="flex items-center text-white">
            <p>Copy Trade</p>
            <span>
              <Image src={Down} alt="carret-down" height={35} width={35} />
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          {/* <Buttonwithoutbg
            Btntext={"Sign in"}
            className={"text-white"}
            onClick={() => router.push("/login")}
          /> */}
          {/* <Buttonwithbg
            btnText={"Create account"}
            onClick={() => router.push("/sign-up")}
            path="/sign-up"
            /> */}
          <Link
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "text-white"
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
      </div>
    </div>
  );
}

export default Navbar;
