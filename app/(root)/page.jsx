import Account from "@/components/ui/account";
import { Button } from "@/components/ui/button";
import Card from "@/components/cards/card";
import Checkwithtext from "@/components/ui/check-with-text";
import Exchange from "@/public/assets/img/png/exchange.png";
import Fund from "@/public/assets/img/svg/fund.svg";
import Grad from "@/public/assets/img/svg/grad.svg";
import Image from "next/image";
import Money from "@/public/assets/img/png/money.png";
import Progress from "@/public/assets/img/svg/progress.svg";
import Stocks from "@/public/assets/img/png/stocks.png";
import Tap from "@/public/assets/img/svg/tap.svg";
import { Testimonials } from "@/mock/data";
import TestimonialsCard from "@/components/ui/test-card";
import Textwithcolor from "@/components/ui/text-with-color";
import Think from "@/public/assets/img/svg/think.svg";
import Topheader from "@/components/screens/top-header/top-header";
import Video from "@/components/ui/video";
const data = [
  {
    icon: "/assets/img/svg/education.svg",
    head: "Education",
    heading: "Master Forex with a Structured Roadmap",
    info: "Step-by-step video lessons, real challenges, and expert mentorship to build rock-solid trading skills.",
  },
  {
    icon: "/assets/img/svg/trade.svg",
    head: "Trade",
    heading: "Trade with Clarity, Confidence & a Journal",
    info: "Apply strategies in live environments, track every move, and grow with mentor feedback.",
  },
  {
    icon: "/assets/img/svg/opportunity.svg",
    head: "Opportunity",
    heading: "Unlock Real Capital, Not Just Simulations",
    info: "Earn your spot in the Trading Arena and get funded to trade forex, indices, commodities & more.",
  },
  {
    icon: "/assets/img/svg/value.svg",
    head: "Value",
    heading: "Earn More, Grow Your Profile, and Get Copied",
    info: "Progress through our trader levels, manage investor capital, and become a featured trader on our Copy Trading platform.",
  },
];
export default function Home() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/people.png"}
        colouredText={"Become a Profitable Trader"}
        otherText={"We Train You, Fund You, and Feature You"}
        check1={"Learn powerful trading strategies in our on-demand academy"}
        check2={"Get Premium Mentorship with automated journal  for feedback"}
        check3={"Earn your spot to manage real capital in our Trading Arena"}
        check4={
          "Get featured on our Copy Trading platform and get paid to be copied"
        }
      />
      <div
        className="bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('/assets/img/png/sec-bg.png')` }}
      >
        <div
          className="w-full mb-10 px-[2rem] lg:px-[5rem] pt-[2rem] "
          style={{ backgroundImage: `url('/assets/img/png/global.png')` }}
        >
          <p className=" text-black text-[25px] text-center lg:text-start lg:text-[40px] font-semibold underline">
            From Student to Funded Trader - We Equip You to Win
          </p>
          <Card cardData={data} />
        </div>
        <div className="w-full lg:px-[5rem] ">
          <div className="bg-black lg:rounded-3xl pb-[3rem]">
            <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row h-[600px]">
              <div className="lg:pl-[4rem] pt-[4rem] w-full lg:w-1/2">
                <Textwithcolor
                  colouredText={"Welcome"}
                  otherText={"to Block Traders Academy"}
                />
                <p className="text-base font-normal text-white text-opacity-90">
                  Where Ambition Meets Skill and Skill Meets Capital.
                </p>
                <Checkwithtext
                  Check={Grad}
                  check1={"Trade Education"}
                  info={
                    "Learn smarter, not harder. Our expert-led curriculum teaches you how the markets really move with mentorship, practical challenges, and live feedback."
                  }
                />
                <Checkwithtext
                  Check={Fund}
                  check1={"Trade Markets"}
                  info={
                    "From forex to indices and commodities, apply your strategy, prove your edge, and earn your place in the Trading Arena."
                  }
                />
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src={Stocks}
                  // height={100}
                  // width={100}
                  alt="stocks"
                  className="lg:w-full lg:h-full h-[30%] object-cover hidden lg:block"
                />
              </div>
            </div>
            <div className="lg:px-[4rem] ">
              <Textwithcolor
                colouredText={"What Sets "}
                otherText={"Block Traders Apart"}
              />

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Checkwithtext
                  Check={Fund}
                  check1={"Trade Funding"}
                  info={
                    "Get funded. Top performers earn access to monitored capital from Block Traders Academy and our partners - no hidden costs, no limits on your growth."
                  }
                />
                <Checkwithtext
                  Check={Progress}
                  check1={"Tracked Education"}
                  info={
                    "Every lesson, task, and trade you complete is recorded, giving both you and your mentors clear visibility into your growth. This structured system ensures you’re always on the right path toward professional trading."
                  }
                />
                <Checkwithtext
                  Check={Tap}
                  check1={"Interactive Sessions"}
                  info={
                    "Join weekly live mentorship calls and trader roundtables. These sessions are your space to ask questions, get personalized guidance, and connect with a growing network of like-minded traders."
                  }
                />
                <Checkwithtext
                  Check={Think}
                  check1={"Challenges"}
                  info={
                    "Challenges are where theory meets execution. Put your skills to the test under real market conditions. Each challenge is a chance to prove consistency, level up, and unlock new opportunities."
                  }
                />
              </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-4 pt-[4rem] lg:px-[4rem] hidden ">
              <div className="">
                <div className="border-2">
                  <Image
                    src={Exchange}
                    // height={100}
                    // width={100}
                    alt="Exchange"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <Textwithcolor
                  colouredText={"Trading"}
                  // otherText={"to Block"}
                />
                <p className="text-base font-normal text-white text-opacity-90">
                  Trading is the process of buying and selling financial assets
                  such as stocks, currencies, commodities, and indices with the
                  goal of generating profit. But it’s more than just buying low
                  and selling high. Successful trading depends on consistency,
                  discipline, and the ability to navigate market movements with
                  a proven strategy
                  <br />
                  <br />
                  Traders aim to capitalize on price fluctuations by going long
                  (buying) or short (selling), anticipating how markets will
                  move. Every decision is backed by proper analysis, risk
                  management, and timing, that’s exactly what we teach at Block
                  Traders Academy
                </p>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-4 pt-[4rem] lg:px-[4rem] hidden">
              <div className="flex flex-col items-end justify-center">
                <Textwithcolor
                  colouredText={"Forex Trading"}
                  // otherText={"to Block"}
                />
                <p className="text-base font-normal text-right text-white text-opacity-90">
                  Forex (short for “foreign exchange”) is the world’s largest
                  and most liquid financial market, where currencies are traded
                  around the clock. It’s a dynamic space where traders profit by
                  speculating on the value of one currency against another.
                  <br />
                  <br />
                  At Block Traders Academy, we equip you with the skills to
                  analyze currency pairs, spot trade setups, and take advantage
                  of real-time volatility, turning every market movement into
                  potential opportunity.
                </p>
              </div>
              <div className="">
                <div className="border-2">
                  <Image
                    src={Money}
                    // height={100}
                    // width={100}
                    alt="Exchange"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <Video />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover px-[2rem] lgpx-[4rem] pt-[4rem] pb-[4rem]"
        style={{ backgroundImage: `url('/assets/img/png/testimonials.png')` }}
      >
        <p className=" text-black text-[40px] font-semibold leading-[72px] mb-[4rem]">
          Testimonials
        </p>
        <div className="flex flex-col items-center justify-evenly lg:flex-row space-y-14 lg:space-y-0">
          {Testimonials.map((testimonial, i) => (
            <TestimonialsCard key={i} testimonial={testimonial} />
          ))}
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
    </>
  );
}
