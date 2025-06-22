/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import { useVideoStore } from "@/store/store";

export function ChallengeModal({ isOpen, onNavigate }) {
  const { challengeCompleted } = useVideoStore();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h3 className="text-xl text-gray-700 font-bold mb-4">
          Congratulations!
        </h3>
        <p className="text-gray-700 mb-6">
          You've completed the {challengeCompleted ? "second" : "first"} set of
          videos. Proceed to the challenge.
        </p>
        <div className="flex justify-end gap-4">
          {/* <Button onClick={onClose}>Close</Button> */}
          <Button onClick={onNavigate}>Go to Challenge</Button>
        </div>
      </div>
    </div>
  );
}
