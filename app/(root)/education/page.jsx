import {
  VideoWithButton,
  VideoWithButtons,
} from "@/components/ui/video-with-button";

import { buttonVariants } from "@/components/ui/button";
import Footercontact from "@/components/ui/footer-contact";

// import NumbersCard from "@/components/cards/numbersCard";
import React from "react";
import Topheader from "@/components/screens/top-header/top-header";
import Account from "@/components/ui/account";
import Link from "next/link";

function Education() {
  return (
    <div className=" ">
      <Topheader
        backgroundImage={"/assets/img/png/ed-bg.png"}
        colouredText={"Education Arena"}
        otherText={
          ": Learn trading from the ground up or sharpen your edge with structured, step-by-step education built for real-world results."
        }
        check1={
          "Master the fundamentals and beyond with expert-led video classes"
        }
        check2={"Prepare for real trading through practical challenges"}
        check3={"Access mentorship, support, and monitored funding as you grow"}
      />
      <div
        className=" p-6 bg-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className=" bg-black p-6 rounded-[20px]">
          <div className="w-full h-full">
            <div className="mb-5">
              <p className=" h-[57px] text-white text-[40px] font-medium">
                Top Featured Videos
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 mt-[6rem] lg:mt-0 ">
              <VideoWithButton
                image="/assets/img/png/fastest-way.png"
                title="Trading Arena : Hidden Gems "
                description="Fastest way to get funded $50,000 as a Block Trader"
              />
              <VideoWithButton
                image="/assets/img/png/top-secrets.png"
                title="Trading Arena : Hidden Gems "
                description="Top Secrets To Profitability"
              />
              {/* <VideoWithButton
                image="/assets/img/png/top-secrets.png"
                title="Trading Arena : Hidden Gems "
                description="Top Secrets To Profitability"
              /> */}
            </div>
            <div className="mt-[3.5rem] mb-8 w-full flex justify-between items-center">
              <p className="text-center text-white text-2xl lg:text-[40px] font-semibold ">
                Course Path
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 items-stretch">
              <VideoWithButtons
                image="/assets/img/png/concept.png"
                title="Trading for Intermediates: Level 2"
                description="Introduction To Institutional Trading Concept"
              />

              <VideoWithButtons
                image="/assets/img/png/reversal.png"
                title="Trading for Intermediates: Level 2"
                description="Reversal And Consolidation"
              />

              <VideoWithButtons
                image="/assets/img/png/4.png"
                title="Trading for Experts: Level 2"
                description="Market Buy and Sell Model "
              />
              <VideoWithButtons
                image="/assets/img/png/3.png"
                title="Trading for Experts: Level 2"
                description="How To Predict Next Market Direction "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-white">
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
            <Link
              href={"/copy-trade"}
              className={`${buttonVariants({ variant: "default" })} mt-4`}
            >
              Copy Trading
            </Link>
          </div>
        </div>
      </div>
      <Account />
      <div className="hidden  lg:block">
        <div className="w-full h-[312px] relative bg-[#D4AF37]">
          <div className="w-[187px] mt-8 h-16 px-[30px] py-5 left-[641px] top-[189px] absolute bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
            <Link href={"/sign-up"}>
              <div className="text-base font-medium text-center text-white capitalize">
                Create Account
              </div>
            </Link>
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

export default Education;
