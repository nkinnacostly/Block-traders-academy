import React from "react";
import TopTraders from "./component/copy-trade";
import Topheader from "@/components/screens/top-header/top-header";

import Card from "@/components/cards/card";
import Account from "@/components/ui/account";
import Footercontact from "@/components/ui/footer-contact";
import Link from "next/link";

const copyTradeData = [
  {
    icon: "/assets/img/svg/education.svg",
    head: "Follow Top Traders",
    info: "Automatically replicate trades from proven successful traders with transparent performance tracking.",
  },
  {
    icon: "/assets/img/svg/trade.svg",
    head: "Real-time Execution",
    info: "Get instant trade replication with minimal slippage and maximum efficiency across all markets.",
  },
  {
    icon: "/assets/img/svg/opportunity.svg",
    head: "Risk Management",
    info: "Built-in risk controls and position sizing to protect your capital while maximizing opportunities.",
  },
  {
    icon: "/assets/img/svg/value.svg",
    head: "Performance Analytics",
    info: "Detailed insights into trader performance, drawdowns, and risk metrics to make informed decisions.",
  },
];

function page() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/trading-bg.png"}
        colouredText={"Copy"}
        otherText={"Trading Platform"}
        check1={"Follow successful traders automatically"}
        check2={"Real-time trade replication"}
        check3={"Risk management tools included"}
        check4={"Professional trading strategies"}
        className={"relative"}
      />

      <div
        className="w-full lg:px-[5rem] px-[1rem] py-[2rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/png/sec-bg.png')` }}
      >
        <div className="bg-black p-6 rounded-[20px]">
          <div className="w-full h-full">
            <div className="">
              <span className="text-white text-[40px] font-semibold">
                Copy{" "}
              </span>
              <span className="text-amber-400 text-[40px] font-semibold">
                Trading
              </span>
            </div>
            <p className="text-xl font-normal text-white text-opacity-90 lg:text-start 2xl:text-start">
              Copy trading allows you to automatically replicate the trades of
              successful traders in real-time. It&apos;s the perfect solution
              for those who want to benefit from professional trading strategies
              without spending years learning the markets.
              <br />
              <br />
              Our platform connects you with verified, profitable traders who
              have proven track records. You can browse their performance
              metrics, risk profiles, and trading styles to find the perfect
              match for your investment goals.
              <br />
              <br />
              With advanced risk management tools and transparent performance
              tracking, you maintain full control over your capital while
              leveraging the expertise of seasoned professionals.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/img/png/sec-bg.png')` }}
      >
        <p className="text-2xl text-black lg:text-[40px] font-semibold w-full px-[2rem] lg:px-[5rem] py-[3rem]">
          Copy Trading Statistics
        </p>
        <div className="w-full bg-black lg:h-[270px] grid grid-cols-1 lg:grid-cols-4 items-center px-[2rem] gap-5 justify-between xl:px-[2rem] space-y-10 lg:space-y-0 py-5 lg:py-0">
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400">50</span>
              <span className="text-5xl font-semibold text-white">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Active Traders <br /> Professional traders available for copying
              with verified track records.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400">200</span>
              <span className="text-5xl font-semibold text-white">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Copy Traders <br /> Investors successfully copying trades and
              growing their portfolios.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400">
                $100,000
              </span>
              <span className="text-5xl font-semibold text-white"></span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Total Profits <br /> Combined profits generated by our copy
              trading community.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400">90</span>
              <span className="text-5xl font-semibold text-white">%</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Success Rate <br /> Percentage of copy traders who maintain
              profitable performance.
            </p>
          </div>
        </div>

        <div className="px-[2rem] w-full lg:px-[5rem] mt-8">
          <p className="text-black text-[40px] font-semibold">
            Why Choose Our Copy Trading Platform
          </p>
          <Card cardData={copyTradeData} />
        </div>
      </div>

      <TopTraders />

      <Account />

      <div className="hidden lg:block">
        <div className="w-full h-[312px] relative bg-[#D4AF37]">
          <div className="w-[187px] mt-8 h-16 px-[30px] py-5 left-[641px] top-[189px] absolute bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
            <Link href={"/sign-up"}>
              <div className="text-base font-medium text-center text-white capitalize">
                Create Account
              </div>
            </Link>
          </div>
          <div className="left-[636px] top-[122px] absolute text-white text-xl font-medium">
            Unlock your copy trading dashboard with access to top-performing
            traders and real-time analytics.
          </div>
          <div className="w-[515px] left-[86px] top-[115px] absolute text-center">
            <span className="text-white text-[40px] font-bold">Join</span>
            <span className="text-black text-[40px] font-semibold"> </span>
            <span className="text-black text-[40px] font-semibold">Copy</span>
            <span className="text-black text-[40px] font-semibold"> </span>
            <span className="text-white text-[40px] font-bold">Trading</span>
          </div>
        </div>
      </div>

      <Footercontact />
    </>
  );
}

export default page;
