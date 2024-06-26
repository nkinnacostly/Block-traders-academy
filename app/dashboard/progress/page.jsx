// import { AnimatePage } from "@/src/components/animations/page";
import { CoursesInProgress } from "../courses/page";
import { GiAlarmClock } from "react-icons/gi";
import Image from "next/image";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import React from "react";

function ProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-5 border-2 border-red-500 p-4">
      <div className="flex items-center flex-col space-x-5 lg:flex-row justify-center  w-full">
        <div className=" w-full lg:w-[264px] rounded-xl shadow-xl p-4 h-full border-2 border-pink-400">
          <h5 className="text-[20px]  font-[500] mb-8">Learning Statistics</h5>
          <div className="shadow-md rounded-xl h-[289px] flex flex-col  justify-evenly p-2">
            <div className="flex items-center justify-between">
              <div>
                {" "}
                <p className="text-2xl font-medium text-black ">O Mins</p>
                <p className="text-sm font-normal text-[#1E1E1E99] ">
                  Your Total Learning Time
                </p>
              </div>
              <div>
                <GiAlarmClock size={50} fill="black" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal text-[#414141] ">Completed</p>
              <p className="text-sm font-normal text-[#414141] ">2</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal text-[#414141] ">
                Courses in Progress
              </p>
              <p className="text-sm font-normal text-[#414141] ">2</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal text-[#414141] ">
                Challenges Completed
              </p>
              <p className="text-sm font-normal text-[#414141] ">0</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal text-[#414141] ">
                Badges Earned
              </p>
              <p className="text-sm font-normal text-[#414141] ">0</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[calc(100%-264px)]  shadow-xl rounded-xl  p-4 border-2 border-blue-600">
          <h5 className="text-[20px]  font-[500] mb-3">Courses Completed</h5>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CoursesCompleted />
            <CoursesCompleted />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-xl p-4 ">
        <h5 className="text-[20px] font-[500] mb-3 ">Courses In-Progress</h5>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-2  shadow-xl rounded-xl">
          <CoursesInProgress />
          <CoursesInProgress />
          <CoursesInProgress />
          {/* <CoursesInProgress />
        <CoursesInProgress /> */}
        </div>
      </div>
      <div className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 p-4 shadow-xl rounded-xl">
        <div className="border-2 rounded-xl">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;

export function CoursesCompleted() {
  return (
    <>
      <div className="relative bg-white shadow-lg rounded-xl">
        <Image
          src={"/assets/img/png/chart.png"}
          alt=""
          className="w-full rounded-t-xl"
          height={100}
          width={100}
        />
        <Image
          src={"/assets/img/svg/play.svg"}
          alt=""
          className="absolute right-4 top-[11rem] lg:top-[6rem] cursor-pointer xl:top-[10rem]"
          height={50}
          width={50}
        />
        <div className="flex flex-col items-center justify-center px-1 ">
          <p className=" text-black text-lg font-medium mt-[2rem] text-start">
            Trading for Beginners: Entry Level
          </p>
          <div className="flex items-end justify-end w-full px-4 pt-2">
            <IoCheckmarkDoneCircleSharp size={50} fill="green" />
          </div>
        </div>
      </div>
    </>
  );
}
