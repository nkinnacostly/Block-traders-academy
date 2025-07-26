import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/public/assets/img/png/logo.png";
import React from "react";

function HomepageFooter() {
  return (
    <>
      {/* <hr className="border" /> */}

      <div className="flex flex-col items-center justify-around space-x-4 lg:p-5 lg:flex-row ">
        <div className="w-full lg:w-[40%] mt-4 mb-4 ">
          <div className="bg-[#1E1E1E99]  p-4 rounded-lg">
            <h5 className="text-[24px]  font-[500] text-[#D4AF37] mb-5">
              Join Our Newsletter
            </h5>
            <div className="flex">
              <input
                placeholder="Enter Email"
                className="bg-[#1E1E1E99] border-none focus:outline-none  p-4"
              />
              <button className="bg-[#D4AF37] text-white px-5">
                Subscribe
              </button>
            </div>
            <p className="text-[#D4AF37] text-sm mt-2">
              Stay ahead with our Weekly updates, strategy tips, and platform
              news straight to your inbox.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-4 gap-3 ">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Company</h5>
            <p className="mt-2 text-sm text-white">About Us</p>
            <p className="mt-2 text-sm text-white">Contacts</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Services</h5>
            <p className="mt-2 text-sm text-white">Trading</p>
            <p className="mt-2 text-sm text-white">Education</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Legal</h5>
            <p className="mt-2 text-sm text-white">Privacy Policy</p>
            <p className="mt-2 text-sm text-white">Terms and Services</p>
            <p className="mt-2 text-sm text-white">Terms of Use</p>
            <p className="mt-2 text-sm text-white">Refund Policy</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Contact</h5>
            <p className="flex flex-wrap mt-2 text-sm text-white truncate">
              blocktraders
            </p>
            <p className="mt-2 text-sm text-white">+234-000-000-000</p>
            {/* <p className="mt-2 text-sm text-white">
              22 Obayan close, Lagos,Nigeria
            </p> */}
          </div>
        </div>
      </div>
      <hr className="hidden border lg:block" />
      <div className="flex flex-col items-center justify-between p-5 space-y-8 lg:flex-row lg:space-y-0">
        <Image src={Logo} height={100} width={100} alt="logo" />
        <div className="flex items-center justify-center space-x-2">
          {/* <Buttonwithbg btnText={"Get Educated"} />
          <ithoutbg Btntext={"Start Trading"} className={"text-white"} /> */}
          <Button variant="outline" size="lg">
            Get Educated
          </Button>
          <Button size="lg">Start Trading</Button>
        </div>
      </div>
    </>
  );
}

export default HomepageFooter;
