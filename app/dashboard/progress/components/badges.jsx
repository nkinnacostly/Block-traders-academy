"use client";
import React from "react";
import Image from "next/image";

import { GetBadges } from "../../services/services";
import { Separator } from "@/components/ui/separator";

function Badges() {
  const { badges: courseBadges, isLoading: badgesLoading } = GetBadges();

  if (badgesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
      </div>
    );
  }

  const badges = courseBadges?.data || [];

  if (!badges.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center">
        <div className="w-24 h-24 mb-4 relative">
          <Image
            src="/assets/img/svg/Warranty.svg"
            height={96}
            width={96}
            alt="No badges yet"
            className="opacity-50"
          />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          No Badges Yet
        </h3>
        <p className="text-muted-foreground max-w-md">
          Complete courses to earn badges and track your progress. Start your
          learning journey today!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col  justify-center">
      <h1 className="text-2xl font-bold text-center">Badges</h1>
      <Separator />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center group relative"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary shadow-lg border-2 border-primary/40 group-hover:scale-105 transition-transform duration-300 cursor-pointer">
              {"🏅" || "🏅"}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-24 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 bg-white text-primary text-sm font-semibold px-4 py-2 rounded shadow-lg border border-primary/20 whitespace-nowrap">
              {badge.video?.name}
            </div>
            <span className="mt-2 text-xs text-muted-foreground">
              Completed on {new Date(badge.created_at).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Badges;
