"use client";

// import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import {
  GetBadges,
  GetCoursesCompleted,
  GetCoursesDuration,
  GetCoursesInProgress,
  GetLiveClasses,
} from "./services/services";
import React, { useEffect } from "react";

import { AnimatePage } from "@/components/animations/page";
// import BarChart from "@/components/dashboard/chart/barChart";
// import Buttonwithbg from "@/components/ui/button-with-bg";
import DashboardChallenges from "@/components/dashboard/challenges";
// import { DatePickerCalendar } from "./components/calendar";
// import DatePicker from "react-datepicker";
// import { DialogComponent } from "./components/dialog-component";
import { FaCircleCheck } from "react-icons/fa6";
import { GiHourglass } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import { IoRefreshCircleSharp } from "react-icons/io5";
// import Modal from "react-modal";
import { RiAwardFill } from "react-icons/ri";
// import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/store";
import { LiveClasses } from "./components/live-classes";
// import { useTheme } from "next-themes";

function Dashboard() {
  // const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const { loggedInUserDetails } = useUserStore();

  // const { user } = loggedInUserDetails;

  const { data, isLoading: inProgressLoading } = GetCoursesInProgress();
  const { completed: completedData, isLoading: completedLoading } =
    GetCoursesCompleted();
  const { duration: coursesDuration } = GetCoursesDuration();
  const { badges: courseBadges } = GetBadges();
  const { liveClasses } = GetLiveClasses();

  useEffect(() => {
    // <DialogComponent />;
    // alert("yooo");
    if (loggedInUserDetails?.first_name === null) {
      router.push("/dashboard/settings");
    }
  }, [loggedInUserDetails?.first_name, router]);

  if (inProgressLoading || completedLoading) {
    return <div>Loading...</div>;
  }
  const courseContent = [
    {
      number: completedData?.count,
      icon: <FaCircleCheck size={20} />,
      tittle: "Completed Courses",
      bgColor: "#D4AF37",
    },
    {
      number: data?.count,
      icon: <IoRefreshCircleSharp size={30} />,
      tittle: "Courses-in-Progress",
      bgColor: "#D4AF37",
    },
    {
      number: `${coursesDuration?.total_duration} min`,
      icon: <GiHourglass size={20} />,
      tittle: "Activity Hours",
      bgColor: "#D4AF37",
    },
    {
      number: loggedInUserDetails?.learners_level,
      icon: <GiProgression size={20} />,
      tittle: "Learners Level",
      bgColor: "#D4AF37",
    },
    {
      number: courseBadges?.data?.length,
      icon: <RiAwardFill size={20} />,
      tittle: "Badges Earned",
      bgColor: "#D4AF37",
    },
  ];

  const appsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  };
  // console.log(courseContent, "This is live classes");
  return (
    <>
      {/* <DialogComponent /> */}
      <div>
        <h5 className="text-[24px]  font-[500]">Overview</h5>
      </div>
      <div
        variants={appsContainer}
        initial="show"
        animate="show"
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {courseContent.map((courseContent, index) => (
          <div
            className={`rounded-[20px]  bg-[${courseContent.bgColor}]  p-4`}
            key={index}
          >
            <div
              className={`flex items-center justify-between mb-4 ${
                courseContent.bgColor === "#000000" ? "text-white" : ""
              }`}
            >
              <h5 className="text-[24px] font-[500]  ">
                {courseContent.number}
              </h5>
              {courseContent.icon}
            </div>
            <div>
              {" "}
              <h5 className="text-[14px] font-[500] ">
                {courseContent.tittle}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-4 mt-8 border-2 mb-4 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>

        <LiveClasses meetings={liveClasses?.meetings} />
      </div>
      <DashboardChallenges />
    </>
  );
}

export default AnimatePage(Dashboard);
