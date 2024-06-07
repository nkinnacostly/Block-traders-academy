import DashboardHeader from "@/src/components/dashboard/header";
import DashboardSidebar from "@/src/components/dashboard/sidebar";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className=" h-[100vh]  m-auto w-[80%]">
      <div className="h-[100px] p-3 hidden lg:block">
        <DashboardHeader />
        <hr className="w-full border" />
      </div>
      <div className="flex h-full lg:h-[calc(100%-100px)]">
        <div className="hidden lg:block w-[250px]  h-full p-3 ">
          <DashboardSidebar />
        </div>
        <div className="w-full lg:w-[calc(100%-250px)] h-full   p-3">
          <div className=" rounded-[20px] h-full overflow-y-scroll p-3 shadow-xl ">
            {children}
          </div>
        </div>
      </div>
      {/* <div className="lg:h-[200px] bg-black text-white overflow-y-scroll p-3 ">
        <DashboardFooter />
      </div> */}
    </div>
  );
}

export default DashboardLayout;
