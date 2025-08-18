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

function DashboardSidebar({ onLinkClick }) {
  const { loggedInUserDetails } = useUserStore();

  const { watchedVideos } = useVideoStore();
  const isLevel1 = loggedInUserDetails?.learners_level === 1;
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

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
    <div className="flex flex-col w-full h-full px-3 lg:px-5 space-y-2 lg:space-y-3 border-2 py-3 lg:py-5 rounded-xl">
      <div className="flex items-center justify-center">
        <div className="items-center w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-full flex justify-center">
          <Avatar className="w-16 h-16 lg:w-20 lg:h-20">
            <AvatarImage src={loggedInUserDetails?.image_url} />
            <AvatarFallback>
              <UserIcon className="w-8 h-8 lg:w-10 lg:h-10" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <>
        {sideLinks.map((links, index) => (
          <Link
            className={`flex items-center justify-start rounded-lg px-3 py-3 lg:py-2 cursor-pointer transition-all duration-200 hover:bg-[#1E1E1E66] active:bg-gray-100 ${
              pathname === links?.link
                ? "bg-[#1E1E1E99] border border-green-300 text-white"
                : "hover:bg-[#1E1E1E66]"
            } ${links.disabled ? "pointer-events-none opacity-50" : ""}`}
            key={index}
            href={links.disabled ? "#" : links.link}
            onClick={!links.disabled ? handleLinkClick : undefined}
          >
            <span className="flex items-center justify-center text-lg lg:text-xl mr-3">
              {links.icon}
            </span>
            <span className="text-sm lg:text-base font-medium">
              {links.tittle}
            </span>
          </Link>
        ))}
      </>
    </div>
  );
}

export default DashboardSidebar;
