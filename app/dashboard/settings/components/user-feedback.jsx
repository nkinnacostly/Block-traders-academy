"use client";

import React from "react";
import { Mail, MessageSquare } from "lucide-react";
function UserFeedBack() {
  return (
    <div className="flex flex-col items-start justify-start w-full lg:w-[534px] p-6 space-y-6 shadow-xl rounded-xl border ">
      <h2 className="text-2xl font-semibold text-start flex items-center gap-2">
        <MessageSquare className="w-5 h-5" />
        Feedback and Help
      </h2>

      <div className="w-full rounded-lg  hover:bg-gray-100 transition-colors">
        <h3 className="text-lg font-medium mb-2">Contact Support</h3>
        <a
          href="mailto:snrdev@gmail.com"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Mail className="w-4 h-4" />
          support@blocktradersacademy.com
        </a>
      </div>
    </div>
  );
}

export default UserFeedBack;
