import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Logo from "@/public/assets/img/png/logo.png";
import LogoDark from "@/public/assets/img/png/logo-black.png";

function LoginHeader() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Image
        src={resolvedTheme === "dark" ? Logo : LogoDark}
        alt="logo"
        height={500}
        width={200}
        className="mb-5"
      />
      <h3 className="text-[32px] font-[500] text-center pb-2">
        Welcome to Block Traders Academy{" "}
      </h3>
      <p className="text-[14px] font-[400] uppercase">
        (Where Traders Are Built)
      </p>
    </div>
  );
}

export default LoginHeader;
