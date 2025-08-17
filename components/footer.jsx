"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/public/assets/img/png/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";

function HomepageFooter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      await apiClient.post(
        "http://api.blocktradersacademy.com/api/newsletter",
        {
          email: email,
        }
      );

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="bg-[#1E1E1E99] border-none focus:outline-none  p-4 flex-1 text-white"
              />
              <button
                onClick={handleSubscribe}
                disabled={isLoading}
                className="bg-[#D4AF37] text-white px-5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            <p className="text-[#D4AF37] text-sm mt-2">
              Stay ahead with our Weekly updates, strategy tips, and platform
              news straight to your inbox.
            </p>
          </div>
        </div>
        <div className="w-full  grid grid-cols-1 lg:grid-cols-4 gap-3 ">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Company</h5>
            <Link href="/about" className="mt-2 text-sm text-white">
              About Us
            </Link>
            <Link href="/#" className="mt-2 text-sm text-white">
              Contacts
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Services</h5>
            <Link href="/trading" className="mt-2 text-sm text-white">
              Trading
            </Link>
            <Link href="/education" className="mt-2 text-sm text-white">
              Education
            </Link>
            <Link href="/copy-trade" className="mt-2 text-sm text-white">
              Copy Trading
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h5 className="text-[24px]  font-[600] text-white">Legal</h5>
            <Link href="/privacy-policy" className="mt-2 text-sm text-white">
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-services"
              className="mt-2 text-sm text-white"
            >
              Terms and Services
            </Link>
            <Link href="/terms-of-use" className="mt-2 text-sm text-white">
              Terms of Use
            </Link>
            <Link href="/refund-policy" className="mt-2 text-sm text-white">
              Refund Policy
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start ">
            <h5 className="text-[24px]  font-[600] text-white">Contact</h5>
            <p className="mt-2 text-sm text-white break-words">
              support@blocktradersacademy.com
            </p>
            <p className="mt-2 text-sm text-white"> 02013309022</p>
          </div>
        </div>
      </div>
      <hr className="hidden border lg:block" />
      <div className="flex flex-col items-center justify-between p-5 space-y-8 lg:flex-row lg:space-y-0 ">
        <Image src={Logo} height={100} width={100} alt="logo" />
        <div className="flex items-center justify-center space-x-2">
          {/* <Buttonwithbg btnText={"Get Educated"} />
          <ithoutbg Btntext={"Start Trading"} className={"text-white"} /> */}
          <Link href={"/education"}>
            <Button variant="outline" size="lg" className="text-white">
              Get Educated
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button size="lg">Start Trading</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomepageFooter;
