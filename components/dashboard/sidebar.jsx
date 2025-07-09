"use client";

import { GiProgression } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/store";
import { useVideoStore } from "@/store/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";
import { CopyIcon } from "@radix-ui/react-icons";
function DashboardSidebar() {
  const { loggedInUserDetails } = useUserStore();

  const { watchedVideos } = useVideoStore();
  const isLevel1 = loggedInUserDetails?.learners_level === "1";
  const pathname = usePathname();
  const sideLinks = [
    {
      icon: <MdDashboard />,
      tittle: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <GoBook />,
      tittle: "Courses",
      link: "/dashboard/courses",
    },
    {
      icon: <GiProgression />,
      tittle: "Progress",
      link: "/dashboard/progress",
    },
    {
      icon: <CopyIcon />,
      tittle: "Copy Trading",
      link: "/dashboard/copy-trade",
    },
    {
      icon: <TbTargetArrow />,
      tittle: "Challenges",
      link: "/dashboard/challenges",
      disabled: watchedVideos !== 4 || isLevel1,
    },
    {
      icon: <IoMdSettings />,
      tittle: "Settings",
      link: "/dashboard/settings",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full px-5 space-y-3 border-2 py-5 rounded-xl">
      <div className="flex items-center justify-center">
        <div className="items-center w-20 h-20 border-2 rounded-full flex justify-center ">
          <Avatar>
            <AvatarImage src={loggedInUserDetails?.image_url} />
            <AvatarFallback>
              <UserIcon className="w-20 h-20" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <>
        {sideLinks.map((links, index) => (
          <Link
            className={`flex items-center justify-start rounded-lg px-3 cursor-pointer ${
              pathname === links?.link
                ? "bg-[#1E1E1E99] border border-green-300"
                : ""
            } ${links.disabled ? "pointer-events-none opacity-50" : ""}`} // Disable the link if it's not accessible
            key={index}
            href={links.disabled ? "#" : links.link} // Prevent navigation if disabled
          >
            <p className={`flex items-start justify-start`}>{links.icon}</p>

            <p className="text-[16px] font-[400]  p-2">{links.tittle}</p>
          </Link>
        ))}
      </>
    </div>
  );
}

export default DashboardSidebar;
