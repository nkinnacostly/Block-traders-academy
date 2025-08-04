// import Buttonwithbg from "@/components/ui/button-with-bg";
// import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import LogoDark from "@/public/assets/img/png/logo-black.png";
import React from "react";
import { useTheme } from "next-themes";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { UserIcon } from "lucide-react";
// import { useUserStore } from "@/store/store";

function DashboardHeader() {
  // const { loggedInUserDetails } = useUserStore();
  // console.log(loggedInUserDetails);
  // const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  // console.log(resolvedTheme);

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <>
      <div className="items-center justify-center hidden w-full h-full p-4 mb-2 lg:flex">
        <div className="flex items-center w-full justify-between max-w-7xl mx-auto">
          <div>
            <Image
              src={resolvedTheme === "dark" ? Logo : LogoDark}
              height={80}
              width={80}
              alt="logo"
              className="object-contain"
            />
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <Link
              href={"/"}
              className="hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-gray-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href={"/education"}
              className="flex items-center hover:text-gray-600 transition-colors font-medium"
            >
              <p>Education Arena</p>
              <span className="ml-1">
                <Image src={Down} alt="carret-down" height={20} width={20} />
              </span>
            </Link>
            <Link
              href={"/trading"}
              className="flex items-center hover:text-gray-600 transition-colors font-medium"
            >
              <p>Trading Arena</p>
              <span className="ml-1">
                <Image src={Down} alt="carret-down" height={20} width={20} />
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5">
            {/* <Buttonwithoutbg Btntext={"Sign in"} /> */}
            {/* <Buttonwithbg btnText={"Create account"} /> */}
            {/* <Avatar>
              <div className="w-20 h-20 border-2 rounded-full flex justify-center items-center">
                <AvatarImage src={loggedInUserDetails?.image_url} />
                <AvatarFallback>
                  <UserIcon className="w-20 h-20" />
                </AvatarFallback>
              </div>
            </Avatar> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
