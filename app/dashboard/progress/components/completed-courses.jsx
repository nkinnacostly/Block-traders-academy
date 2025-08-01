"use client";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { GetCoursesCompleted } from "../../services/services";
import { Skeleton } from "@/components/ui/skeleton";

const getYoutubeThumbnail = (url) => {
  const videoId = url.split("v=")[1] || url.split("/").pop();
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export function CoursesCompleted() {
  const {
    completed: completedData,
    isLoading: completedLoading,
    error,
  } = GetCoursesCompleted();
  console.log(completedData, "This is completed data");
  if (completedLoading)
    return (
      <>
        <div className="grid grid-cols-2 gap-5 my-5">
          {Array(2)
            .fill(1)
            .map((_, index) => {
              return (
                <Skeleton className="h-40 w-full bg-gray-300" key={index} />
              );
            })}
        </div>
      </>
    );
  if (error)
    return (
      <>
        <h5>Oops!!! Something went wrong</h5>
      </>
    );
  return (
    <Card className="h-[90%] border-none overflow-scroll">
      {/* <Separator /> */}
      <CardContent className="">
        {completedData?.courses?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            <h3>No Completed Courses Yet</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 ">
            {completedData?.courses?.map((video, id) => (
              <div className="relative rounded-bl-3xl rounded-br-3xl" key={id}>
                <Image
                  src={
                    getYoutubeThumbnail(video?.video?.path) ||
                    `${video?.video?.thumbnail}`
                  }
                  alt={video?.video?.name}
                  className="w-full rounded-t-xl"
                  height={200}
                  width={400}
                  unoptimized
                />
                <div className="px-5">
                  <p className="text-2xl font-medium mt-[2rem] text-white">
                    {video?.video?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className=" bg-white shadow-lg rounded-xl">
          <Image
            src={"/assets/img/png/chart.png"}
            alt=""
            className="w-full rounded-t-xl"
            height={100}
            width={100}
          />
          <div className="flex flex-col items-center justify-center px-1 ">
            <p className=" text-black text-lg font-medium mt-[2rem] text-start">
              Trading for Beginners: Entry Level
            </p>
            <div className="flex items-end justify-end w-full px-4 pt-2">
              <IoCheckmarkDoneCircleSharp size={50} fill="green" />
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
