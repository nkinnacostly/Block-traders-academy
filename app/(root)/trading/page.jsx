import { Button } from "@/components/ui/button";
// import Buttonwithbg from "@/components/ui/button-with-bg";
import Footercontact from "@/components/ui/footer-contact";
import Image from "next/image";

// import {
//   VideoWithButtons,
//   VideoWithButton,
// } from "@/src/components/ui/video-with-button";
import React from "react";
import Topheader from "@/components/screens/top-header/top-header";
import Account from "@/components/ui/account";

function Trading() {
  return (
    <div className="relative ">
      <Topheader
        backgroundImage={"/assets/img/png/trading-bg.png"}
        colouredText={"Trading Arena"}
        otherText={
          ": Take your skills live, trade with discipline, and scale your way to real capital"
        }
        check1={
          "Trade in a structured environment with daily journaling and mentor feedback"
        }
        check2={"Unlock funding as you move up the ranks"}
        check3={"Grow your equity and get discovered by real investors"}
        className={" z-10"}
      />
      <div
        className=" p-6 bg-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="rounded-[20px] bg-black p-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 place-content-center">
            <div className="">
              <Image
                src={"/assets/img/png/beginner.png"}
                height={500}
                width={500}
                alt="beginner"
                // layout="fill"
                // objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Beginner Traders (Level 4–10)
              </p>
              <div className="mt-3">
                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Badge Progression:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Level 4–5: Profitable Trader</li>
                  <li>Level 6–10: Risk Manager</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  What You Get:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Hands-on learning while trading live markets</li>
                  <li>Guided mentorship and daily trade journaling</li>
                  <li>Access to challenges designed to sharpen fundamentals</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Funding Starts at Level 7
                </p>
                <p className="text-base font-normal text-white text-opacity-90 mb-4">
                  Prop Account Funding: $3,000 – $5,000
                </p>
              </div>
              <Button size="xl" className="mt-4">
                Start Here
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center mt-[4rem] relative">
            <Image
              src={"/assets/img/png/popular.png"}
              height={150}
              width={150}
              alt="beginner"
              className="absolute -left-10"
            />
            <div className="flex flex-col items-start justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Intermediate Traders (Level 11–16)
              </p>
              <div className="mt-3">
                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Badge Progression:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Level 11–13: Signal Provider</li>
                  <li>Level 14–16: Money Monger</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  What You Get:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Advanced technical and fundamental challenge sets</li>
                  <li>Performance-based eligibility for larger accounts</li>
                  <li>Recognition as a trusted signal provider</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Funding Options:
                </p>
                <div className="text-base font-normal text-white text-opacity-90 mb-4">
                  <p>Live Account: $5,000 – $10,000</p>
                  <p>Prop Account: Up to $50,000</p>
                </div>
              </div>
              <Button size="xl" className="mt-4">
                Start Here
              </Button>
            </div>
            <div>
              <Image
                src={"/assets/img/png/intermediate.png"}
                height={500}
                width={500}
                alt="beginner"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center mt-[4rem]">
            <div>
              <Image
                src={"/assets/img/png/expert.png"}
                height={500}
                width={500}
                alt="beginner"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Expert Traders (Level 17–20)
              </p>
              <div className="mt-3">
                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Badge Earned:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Level 17–20: Block Trader</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  What You Get:
                </p>
                <ul className="text-base font-normal text-white text-opacity-90 mb-4 space-y-2 list-disc list-inside">
                  <li>Highest level of funding and trader recognition</li>
                  <li>Eligibility to appear on the Copy Trading leaderboard</li>
                  <li>Deep risk reviews and trading authority</li>
                </ul>

                <p className="text-xl font-semibold text-white text-opacity-90 mb-4">
                  Funding Options:
                </p>
                <div className="text-base font-normal text-white text-opacity-90 mb-4">
                  <p>Live Account: $20,000 – $50,000</p>
                  <p>Prop Account: $100,000 – $200,000</p>
                </div>

                <p className="text-sm font-normal text-white text-opacity-90 mb-4 italic">
                  Note: Whether you receive a live account (funded by Block
                  Traders) or a prop account (from our prop firm partners)
                  depends on your performance, risk management, and journaling
                  discipline in the Academy.
                </p>
              </div>
              <Button size="xl" className="mt-4">
                Start Here
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full 2xl:h-[50vh]  xl:h-[60vh] bg-center bg-no-repeat bg-cover px-[2rem] py-6"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full space-y-10 lg:flex-row lg:space-y-0 justify-evenly lg:gap-2">
            <div className=" bg-black bg-opacity-80  h-[532px] rounded-tl-xl rounded-bl-xl p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/beg.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Beginner
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 gap-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $3,000 – $5,000 (Prop Account)
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  US cents/ EU <br /> cents/ GBP pence
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Reach Level 7 – Level 10
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Badges
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Profitable Trader (Level 4–5)
                  </p>
                  <p className="text-base font-normal text-white ">
                    Risk Manager (Level 6–10)
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-black bg-opacity-80  h-[532px]  p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/inter.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Intermediate
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $5,000 – $10,000 (Live Account) or
                  <br />
                  Up to $50,000 (Prop Account)
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  USD/ EUR/ GBP
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Reach Level 11 – Level 16
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Badges
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Signal Provider (Level 11–13)
                  </p>
                  <p className="text-base font-normal text-white ">
                    Money Monger (Level 14–16)
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-black bg-opacity-80  h-[532px] rounded-tr-xl rounded-br-xl p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/exp.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Expert
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $20,000 – $50,000 (Live Account) or
                  <br />
                  $100,000 – $200,000 (Prop Account)
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  USD/ EUR/ GBP
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Reach Level 17 – Level 20
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Badges
                </p>
                <div className="w-[122px] text-center">
                  <p className="text-base font-normal text-white ">
                    Block Trader (Level 17–20)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:block bg-center bg-no-repeat bg-cover lg:pt-[10rem]"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="w-full h-[312px] flex items-center justify-between px-[5rem]">
          <div className=" ">
            <span className="text-black text-[40px] font-bold ">Copy</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-semibold ">Block</span>
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
            <span className="text-black text-[40px] font-semibold ">Block</span>
            <span className="text-black text-[40px] font-semibold ">
              Traders{" "}
            </span>
            <span className="text-white text-[40px] font-bold ">Today</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footercontact />
      </div>
    </div>
  );
}

export default Trading;
