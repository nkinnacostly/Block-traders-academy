"use client";

// import Buttonwithbg from "./button-with-bg";
// import Buttonwithoutbg from "./button-without-bg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function VideoWithButton({
  image,
  title,
  description,
  buttonText = "Watch video",
}) {
  return (
    <div className=" w-full h-full ">
      <div className="flex w-full justify-between h-full">
        <div className="relative bg-white rounded-bl-3xl rounded-br-3xl flex flex-col h-full w-full">
          <div className="relative">
            <Image
              src={image}
              alt={title}
              className="w-full object-cover "
              height={192}
              width={400}
            />
            <Link href={"/sign-up"}>
              <Image
                src={"/assets/img/svg/play.svg"}
                alt="play"
                className="absolute right-4  transform -translate-y-1/2 cursor-pointer"
                height={70}
                width={70}
              />
            </Link>
          </div>
          <div className="px-5 flex-1 flex flex-col">
            <p className="text-black text-2xl font-medium mt-[2rem]">{title}</p>
            <p className="mt-3 text-base font-normal text-stone-900 flex-1">
              {description}
            </p>
            <div className="flex items-center justify-center w-full mt-8 mb-8">
              <button className="px-5 py-2.5 bg-amber-400 rounded-lg text-center text-black text-base font-medium capitalize">
                <Link href={"/sign-up"}>{buttonText}</Link>
                {/* {buttonText} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoWithButtons({
  image,
  title,
  description,
  duration = "10 - 12mins",
  learners = "234 Learners",
  // moreInfoText = "More info",
  startLearningText = "start learning",
}) {
  return (
    <div className="h-full">
      <div className="relative bg-white rounded-bl-3xl rounded-br-3xl flex flex-col h-full">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="w-full object-cover "
            height={192}
            width={400}
          />
          <Link href={"/sign-up"}>
            <Image
              src={"/assets/img/svg/play.svg"}
              alt=""
              className="absolute right-4  transform -translate-y-1/2 cursor-pointer"
              height={70}
              width={70}
            />
          </Link>
        </div>
        <div className="px-5 flex-1 flex flex-col">
          <p className="text-black text-2xl font-medium mt-[2rem] text-center">
            {title}
          </p>
          <p className="mt-3 text-base font-normal text-center text-stone-900 flex-1">
            {description}
          </p>
          <div className="flex items-center justify-between mt-[1rem]">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={"/assets/img/svg/clock.svg"}
                height={30}
                width={30}
                alt="clock"
              />
              <p className="text-base font-medium text-center text-neutral-700">
                {duration}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={"/assets/img/svg/cap.svg"}
                height={30}
                width={30}
                alt="clock"
              />
              <p className="text-base font-medium text-center text-neutral-700">
                {learners}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-8 mb-8 space-x-8">
            {/* <div className="w-[165px] h-11 px-5 py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <div className="text-base font-medium text-center text-black capitalize">
                {moreInfoText}
              </div>
            </div> */}
            <div className="w-[165px] h-11 px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <Link
                href={"/sign-up"}
                className="text-base font-medium text-center text-black capitalize"
              >
                {startLearningText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
