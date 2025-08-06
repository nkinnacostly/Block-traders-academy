import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SubmitCourse } from "../services/courses-service";
// import { SubmitCourse } from "../services/courses-service";
// import { CldVideoPlayer } from "next-cloudinary";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "@/utils/get-youtube-url";
import { useUserStore } from "@/store/store";
import { useState } from "react";

export function WatchVideo({
  children,
  data,
  // setInProgress,
  inProgress,
  onWatched,
}) {
  const { loggedInUserDetails } = useUserStore();
  const match = getYouTubeVideoId(data?.path);
  const { onSubmit, completed } = SubmitCourse();

  // console.log(data);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  let videoCode;
  if (match) {
    videoCode = match;
  }
  const checkElapsedTime = (e) => {
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setShowButton(true);
      console.log("Yoloooo");
    }
  };

  // Responsive YouTube player options
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  // console.log(loggedInUserDetails?.block_level, "Block level");
  const handleExerciseComplete = async () => {
    onWatched();
    setShowDialog(false);
    await completed({
      ...inProgress,
      course_id: data?.id,
      course_level: data?.level,
    });
  };
  const handleVideoPlay = async () => {
    await onSubmit({
      ...inProgress,
      course_id: data?.id,
      course_level: data?.level,
    });
    // await challengeCompleted({
    //   challenge: "secondChallengePassed",
    // });
    // onWatched();
  };
  const handleVideoReady = async () => {
    setIsLoading(false);
  };

  const handleStateChange = async (e) => {
    // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
    if (e.data === 1) {
      // When video starts playing

      await onSubmit({
        ...inProgress,
        course_id: data?.id,
        course_level: data?.level,
      });
    }
    checkElapsedTime(e);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] max-w-4xl p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl">{data?.name}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            {data?.duration}
          </DialogDescription>
        </DialogHeader>
        <Separator />
        {isLoading && <Skeleton className="h-4 w-full" />}

        {/* Responsive video container */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          {loggedInUserDetails?.learners_level === "1" ? (
            <div className="absolute inset-0">
              <YouTube
                videoId={videoCode}
                className="w-full h-full"
                iframeClassName="w-full h-full"
                onStateChange={handleStateChange}
                opts={opts}
                onReady={handleVideoReady}
              />
            </div>
          ) : (
            <video
              src={data?.path}
              controls
              autoPlay={false}
              onPlay={handleVideoPlay}
              onEnded={handleExerciseComplete}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <Separator />

        {showButton && (
          <DialogFooter className="pt-4">
            <Button
              size="sm"
              onClick={handleExerciseComplete}
              className="w-full sm:w-auto"
            >
              Done
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
