import Image from "next/image";
import React from "react";

function VidCard({ image, title, description }) {
  return (
    <div className="w-full lg:w-[453px] h-[400px]  bg-white rounded-3xl lg:rounded-bl-3xl lg:rounded-br-3xl relative">
      <Image
        src={image}
        alt={title}
        className="w-full rounded-tr-3xl rounded-tl-3xl object-cover"
        height={100}
        width={150}
      />
      <Image
        src={"/assets/img/svg/play.svg"}
        alt=""
        className="absolute right-4 lg:top-[11rem] top-[11rem] cursor-pointer"
        height={70}
        width={70}
      />
      <div className="p-4">
        <p className=" text-center text-black text-2xl font-medium ">{title}</p>
        <p className=" text-center text-stone-900 text-base font-normal mt-[1rem]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="px-[2rem] lg:px-[4rem] mt-[4rem]">
      <p className=" text-white text-[40px] font-semibold ">Trading Basics</p>
      <p className="mb-8 text-2xl font-medium text-amber-400">See all videos</p>
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-x-5 lg:space-y-0">
        <VidCard
          image="/assets/img/png/forex.png"
          title="Trading for Beginners: Level 1"
          description="Forex trading: Getting Started for beginners"
        />
        <VidCard
          image="/assets/img/png/make-money.png"
          title="Trading for Beginners: Level 1"
          description="How to make money forex trading "
        />
      </div>
    </div>
  );
}

export default Video;
