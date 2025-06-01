"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GetBadges } from "../../services/services";

function Badges() {
  const { badges: courseBadges, isLoading: badgesLoading } = GetBadges();

  if (badgesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
      </div>
    );
  }

  if (!courseBadges?.courses || courseBadges.courses === 0) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {courseBadges.courses.map((badge) => (
        <motion.div
          key={badge.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <Image
                  src={badge.image || "/assets/img/svg/Warranty.svg"}
                  height={150}
                  width={150}
                  alt={badge.name}
                  className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {badge?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {badge?.description}
                </p>
                <div className="w-full bg-secondary/20 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${badge?.progress || 0}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Progress: {badge?.progress || 0}%
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Badges;
