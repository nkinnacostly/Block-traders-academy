"use client";
// import Address from "@/public/assets/img/svg/address.svg";
import { Button } from "./button";
// import Buttonwithbg from "./button-with-bg";
import Envelop from "@/public/assets/img/svg/Envelope.svg";
import Image from "next/image";
import React, { useState } from "react";
import Telephone from "@/public/assets/img/svg/Telephone.svg";
import Textwithcolor from "./text-with-color";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
// import Send from "@/public/assets/img/svg/send.svg";

function Footercontact() {
  const [activeTab, setActiveTab] = useState("trading");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        interest: activeTab,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      await apiClient.post(
        "https://blocktraders.academy/api/contact-form",
        payload
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setActiveTab("trading");
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <div
        className="px-[2rem] w-full xl:px-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 py-[3rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/png/contact-bg.png')` }}
      >
        <div>
          <Textwithcolor
            colouredText={"Learning"}
            otherText={
              "on any other platform would be settling for less, Let's get in touch"
            }
          />
          <div className="flex flex-col space-y-10 ">
            <div className="flex items-center justify-start pl-4 mt-10 space-x-4">
              <Image src={Envelop} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">
                support@blocktradersacademy.com
              </p>
            </div>
            <div className="flex items-center justify-start space-x-4 border-2 border-amber-400 rounded-2xl h-[78px] pl-4">
              <Image src={Telephone} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">02013309022</p>
            </div>
            {/* <div className="flex items-center justify-start pl-4 space-x-4">
              <Image src={Address} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">
                22 Obayan street, Lagos, Nigeria
              </p>
            </div> */}
          </div>
        </div>
        <div className="">
          <div className="  bg-white rounded-lg p-[2rem]">
            <p className="text-xl font-medium text-amber-400 ">
              I&apos;m interested in...
            </p>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 mt-4">
              <Button
                size="lg"
                className={`border-stone-900 border-opacity-60 text-stone-900 ${activeTab === "trading" ? "bg-amber-400" : "bg-white"}`}
                onClick={() => setActiveTab("trading")}
                disabled={isLoading}
              >
                Trading
              </Button>
              <Button
                size="lg"
                className={`border-stone-900 border-opacity-60 text-stone-900 ${
                  activeTab === "learning" ? "bg-amber-400" : "bg-white"
                }`}
                onClick={() => setActiveTab("learning")}
                disabled={isLoading}
              >
                Learning
              </Button>
              <Button
                size="lg"
                // variant="outline"
                className={`border-stone-900 border-opacity-60 text-stone-900 mt-4 ${
                  activeTab === "other" ? "bg-amber-400" : "bg-white"
                }`}
                onClick={() => setActiveTab("other")}
                disabled={isLoading}
              >
                Other
              </Button>
            </div>

            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="w-full h-[50px]  border-b bg-white border-stone-900 focus:border-amber-400 outline-none mb-[4rem] mt-[3rem] px-3 text-black  "
                placeholder="Your Name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="w-full h-[50px] border-b bg-white border-stone-900 focus:border-amber-400 outline-none mb-[4rem] px-3 text-black"
                placeholder="Your Email"
              />
              <input
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="w-full h-[50px] border-b bg-white border-stone-900 focus:border-amber-400 outline-none px-3 text-black"
                placeholder="Message"
              />
            </div>
            <div>
              <div
                className={`h-[78px] lg:px-16 py-6 bg-amber-400 rounded-2xl flex items-center justify-center space-x-5 lg:w-[315px] cursor-pointer mt-[5rem] ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={!isLoading ? handleSubmit : undefined}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Image
                    src={"/assets/img/svg/send.svg"}
                    height={20}
                    width={20}
                    alt="send"
                  />
                )}
                <p className="text-lg font-medium text-center text-white ">
                  {isLoading ? "Sending..." : "Send Message"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footercontact;
