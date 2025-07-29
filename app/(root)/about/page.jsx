import { Button } from "@/components/ui/button";
import Card from "@/components/cards/card";

import Footercontact from "@/components/ui/footer-contact";

import React from "react";
import Topheader from "@/components/screens/top-header/top-header";
import Account from "@/components/ui/account";
const data = [
  {
    icon: "/assets/img/svg/education.svg",
    head: "Education",
    info: "Learn through recorded classes, real-time Zoom sessions, and hands-on trading challenges.",
  },
  {
    icon: "/assets/img/svg/trade.svg",
    head: "Trade",
    info: "Advance through our trading levels by proving consistency and discipline, not by paying extra.",
  },
  {
    icon: "/assets/img/svg/human.svg",
    head: "Trade needs",
    info: "Once you qualify, you can get access to investor-backed capital — no gimmicks, just results.",
  },
  {
    icon: "/assets/img/svg/platform.svg",
    head: "Platform",
    info: "You’ll be learning and growing alongside other serious traders and mentors who’ve been there.",
  },
];
function AboutPage() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Years of Expertise"}
        otherText={"One Platform. Unlimited Growth"}
        check1={"Master the markets with structured education"}
        check2={"Get funded when you prove your skill"}
        check3={"Grow confidently with rollover support and insights"}
        className={"relative"}
      />
      <div
        className="w-full px-[5rem] py-[2rem]  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className=" bg-black p-6 rounded-[20px]">
          <div className="w-full h-full">
            <div className="">
              <span className="text-white text-[40px] font-semibold">
                About{" "}
              </span>
              <span className="text-amber-400 text-[40px] font-semibold">
                Block Traders Academy
              </span>
            </div>
            <p className="text-xl font-normal text-white text-opacity-90 lg:text-start 2xl:text-start">
              Block Traders Academy was founded on the belief that trading
              should not be reserved for a select few. We saw an opportunity to
              make the financial markets more accessible and we took it.
              <br />
              <br />
              As traders ourselves, we recognized how the evolving digital
              landscape created new ways for anyone, anywhere, to learn, take
              smart risks, and grow. So we built a platform guided by three core
              principles: transparency, opportunity, and community.
              <br />
              We’re committed to an open, honest experience, no hidden fees, no
              skewed trader stats, no gimmicks. Just real education and real
              chances to succeed.
              <br />
              Access to quality trading knowledge shouldn’t be locked away. If
              investors like Warren Buffett built wealth through insight and
              strategy, why shouldn’t the rest of us?
              <br />
              <br />
              At Block Traders, we reduce costs, cut through the noise, and
              focus on collaborative tools that help you become a consistent,
              profitable trader.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <p className="text-2xl  text-black lg:text-[40px] font-semibold  w-full px-[2rem] lg:px-[5rem] py-[3rem]">
          Block Traders In Numbers
        </p>
        <div className="w-full bg-black lg:h-[270px] grid grid-cols-1 lg:grid-cols-4  items-center px-[2rem] gap-5 justify-between xl:px-[2rem] space-y-10 lg:space-y-0 py-5 lg:py-0">
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">200</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Trained Students <br /> Aspiring traders from around the world
              have gained real skills through our structured programs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">300</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Platform Users
              <br /> From beginners to advanced traders — over 300 users trust
              Block to guide their trading journey.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">50</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Active Copy Traders <br /> Our copy trading platform is growing
              fast — with over 100 users replicating top strategies in real
              time.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">50</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Partner Firms & Investors
              <br /> We’ve built relationships with over 100 firms and investors
              supporting top-performing traders.
            </p>
          </div>
        </div>
        <div className="px-[2rem] w-full lg:px-[5rem] mt-8">
          <p className=" text-black text-[40px] font-semibold ">
            More Reasons to trade with Block Traders
          </p>
          <Card cardData={data} />
        </div>
        <div className="hidden lg:block ">
          <div className="w-full h-[312px] flex items-center justify-between px-[5rem]">
            <div className=" ">
              <span className="text-black text-[40px] font-bold ">Copy</span>
              <span className="text-black text-[40px] font-semibold "> </span>
              <span className="text-black text-[40px] font-semibold ">
                Block
              </span>
              <span className="text-black text-[40px] font-semibold "> </span>
              <span className="text-black text-[40px] font-bold ">Traders</span>
            </div>
            <div className="space-y-4">
              <div className="  text-black text-xl font-medium ">
                Start copying top-performing traders with proven results and
                real-time transparency.
              </div>
              <Button className="bg-black text-white" size="xl">
                Copy Trade
              </Button>
            </div>
          </div>
        </div>
        <Account />
        <div className="hidden  lg:block">
          <div className="w-full h-[312px] relative bg-[#D4AF37]">
            <div className="w-[187px] mt-8 h-16 px-[30px] py-5 left-[641px] top-[189px] absolute bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-base font-medium text-center text-white capitalize">
                Create Account
              </div>
            </div>
            <div className=" left-[636px] top-[122px] absolute text-white text-xl font-medium ">
              Unlock your personal trading dashboard with tailored courses,
              funding opportunities, and exclusive insights.
            </div>
            <div className="w-[515px] left-[86px] top-[115px] absolute text-center">
              <span className="text-white text-[40px] font-bold ">Join</span>
              <span className="text-black text-[40px] font-semibold "> </span>
              <span className="text-black text-[40px] font-semibold ">
                Block
              </span>
              <span className="text-black text-[40px] font-semibold ">
                Traders{" "}
              </span>
              <span className="text-white text-[40px] font-bold ">Today</span>
            </div>
          </div>
        </div>
        <Footercontact />
      </div>
    </>
  );
}

export default AboutPage;
