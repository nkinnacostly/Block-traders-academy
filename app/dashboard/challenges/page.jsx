import AllDashboardCourses from "@/components/dashboard/courses";
// import { AnimatePage } from "@/src/components/animations/page";
import DashboardChallenges from "@/components/dashboard/challenges";
import React from "react";

function Challenges() {
  return (
    <div className="flex flex-col justify-center space-y-5 item-center">
      <DashboardChallenges />
      <div className="p-4 mt-4 border-2 shadow-xl rounded-xl">
        <h5 className="text-[20px]  font-[500] mb-3">Recommended Challenges</h5>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <AllDashboardCourses />
          <AllDashboardCourses />
          <AllDashboardCourses />
          {/* <AllDashboardCourses /> */}
        </div>
      </div>
      <div className="p-4 mt-4 border-2 shadow-xl rounded-xl">
        <h5 className="text-[20px]  font-[500] mb-3"> Challenges</h5>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <AllDashboardCourses />
          <AllDashboardCourses />
          <AllDashboardCourses />
          {/* <AllDashboardCourses /> */}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
