"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
function UserFeedBack() {
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    alert("Thank you for your feedback!");
    setFeedbackText("");
  };

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
          snrdev@gmail.com
        </a>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium mb-3">Provide Feedback</h3>
        <form onSubmit={handleSubmitFeedback} className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px] resize-none"
            placeholder="Share your thoughts, suggestions, or report an issue..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="flex items-center gap-2  text-white py-2 px-4 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UserFeedBack;
