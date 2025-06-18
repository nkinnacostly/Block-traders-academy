/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { WatchVideo } from "./video-modal";
import { useRouter } from "next/navigation";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useUserStore } from "@/store/store";
import { useVideoStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { useInitiatePayment } from "../services/initialize-payment";
import useToggle from "@/hooks/use-toggle";
import PaymentDialog from "./payment-dialog";
import useFetchLevel2 from "@/hooks/usefetchlevel2";
import { ChallengeModal } from "./ChallengeModal";
import { toast } from "sonner";
import useGetUserInfo from "@/hooks/useGetUserInfo";

export default function CoursesVideos() {
  const router = useRouter();
  const { loggedInUserDetails } = useUserStore();

  const { watchedVideos, incrementWatchedVideos } = useVideoStore();
  const [isVisible, toggleVisibility] = useToggle(false);
  const [paymentData, setPaymentData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [inProgress, setInProgress] = useState({
    user_id: loggedInUserDetails?.id || "",
    course_id: "",
  });
  const isLevel1 = loggedInUserDetails?.learners_level === "1";
  const isLevel2 =
    loggedInUserDetails?.learners_level > "1" &&
    loggedInUserDetails?.paid === "1";
  const level1Url = "/all-videos";
  const level2Url = "/api/get-level-2";
  const level1reqKey = ["level1-videos"];
  const level2reqKey = ["level2-videos"];
  const { data: userInfo } = useGetUserInfo();
  const userData = userInfo?.data?.user;
  const { useGetRequest } = useApiRequest();
  const { useGetRequest2 } = useFetchLevel2();
  const {
    data: level1Data,
    isLoading: isLoadingLevel1,
    isError: isErrorLevel1,
  } = useGetRequest(level1Url, level1reqKey, { enabled: isLevel1 });
  const {
    data: level2Data,
    isLoading: isLoadingLevel2,
    isError: isErrorLevel2,
  } = useGetRequest2(level2Url, level2reqKey, { enabled: isLevel2 });

  const { mutateAsync: initiatePayment, isPending: isPaymentPending } =
    useInitiatePayment(loggedInUserDetails?.uuid);

  const handlePayment = async () => {
    try {
      const response = await initiatePayment();
      if (response?.status === 200) {
        setPaymentData(response.data);
        toggleVisibility();
      }
    } catch (error) {
      toast.error("Payment initiation failed. Please try again.");
      console.error("Payment failed:", error);
    }
  };

  const videos = useMemo(
    () =>
      (isLevel1 ? level1Data?.data?.videos : level2Data?.data?.videos) || [],
    [isLevel1, level1Data, level2Data]
  );

  const updatedVideos = useMemo(
    () =>
      videos.map((video) => ({
        ...video,
        image: `/assets/${video.id}.jpeg`,
      })),
    [videos]
  );

  const handleVideoWatched = () => {
    if (!isLevel1) {
      incrementWatchedVideos();
    }
  };

  useEffect(() => {
    if (watchedVideos === 3 && !isLevel1) {
      setModalOpen(true);
    }
  }, [watchedVideos, isLevel1]);

  const closeModal = () => setModalOpen(false);
  const navigateToChallenge = () => {
    closeModal();
    router.push("/dashboard/challenges");
  };

  if (isErrorLevel1 || isErrorLevel2) {
    return (
      <div className="text-red-500 font-bold text-center p-4">
        Oops! Something went wrong. We&apos;re working on it!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {userData?.paid === 0 && (
        <div className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg shadow-sm">
          <h5 className="text-2xl font-medium">Pay to Unlock other Lessons</h5>
          <Button
            onClick={handlePayment}
            disabled={isPaymentPending}
            className="bg-amber-500 hover:bg-amber-600"
          >
            {isPaymentPending ? "Processing..." : "Proceed to Payment"}
          </Button>
        </div>
      )}
      {!isLevel1 && !isLevel2 && (
        <div className="w-full flex items-center justify-between p-4 bg-secondary rounded-lg shadow-sm">
          <h5 className="text-2xl font-medium">
            You have not paid for this course, you can't be in level 2 without
            paying
          </h5>
        </div>
      )}

      {(isLoadingLevel1 || isLoadingLevel2) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {updatedVideos.map((video, index) => {
          const isAccessible = index === 0 || loggedInUserDetails.paid === "1";

          return (
            <div
              key={video.id}
              className="border-2 rounded-2xl overflow-hidden bg-secondary shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className={`relative ${!isAccessible && "opacity-50"}`}>
                <Image
                  src={video.image}
                  alt={video.name}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={200}
                  priority={index < 3}
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium mb-4">{video.name}</h3>
                  <div className="flex justify-center">
                    {isAccessible ? (
                      <WatchVideo
                        data={video}
                        setInProgress={setInProgress}
                        inProgress={inProgress}
                        onWatched={handleVideoWatched}
                      >
                        <Button className="bg-amber-500 hover:bg-amber-600">
                          Watch Video
                        </Button>
                      </WatchVideo>
                    ) : (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <PaymentDialog
        openChange={isVisible}
        handleOpenChange={toggleVisibility}
        data={paymentData}
      />

      <ChallengeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onNavigate={navigateToChallenge}
      />
    </div>
  );
}
