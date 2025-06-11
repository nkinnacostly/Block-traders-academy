"use client";

import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImageSchema } from "@/schemas/settings";
import ImageUploading from "react-images-uploading";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FiCamera, FiUpload, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function UserProfilePic() {
  const { loggedInUserDetails } = useUserStore();
  const maxNumber = 1;
  const { useMutationRequest } = useApiRequest();
  const { mutateAsync, isPending } = useMutationRequest();
  const queryClient = useQueryClient();
  const [isHovering, setIsHovering] = useState(false);

  const { control, handleSubmit, setValue, register, watch } = useForm({
    resolver: zodResolver(ImageSchema),
    defaultValues: {
      image: "",
      id: loggedInUserDetails?.id,
    },
  });

  const currentImage = watch("image");

  useEffect(() => {
    if (loggedInUserDetails) {
      setValue("id", loggedInUserDetails?.id);
      setValue(
        "image",
        loggedInUserDetails?.image_url === "1" ||
          loggedInUserDetails?.image_url === "0"
          ? ""
          : loggedInUserDetails?.image_url
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUserDetails]);

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/upload_image",
          data: userData,
        },
        {
          onSuccess: (response) => {
            if (response && response.status >= 200 && response.status < 300) {
              queryClient.refetchQueries({
                queryKey: ["users-info"],
              });
              toast.success("Profile Updated Successfully");
            } else {
              toast.error(
                response?.data?.message || "Failed to update profile picture"
              );
            }
          },
          onError: (error) => {
            console.log(error, "This is error");
            const errorMessage =
              error?.response?.data?.message ||
              error?.message ||
              "Failed to update profile picture";
            toast.error(errorMessage);
          },
        }
      );
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className=" p-8 rounded-xl shadow-md flex items-center justify-center flex-col space-y-5 border text-">
        <h2 className="text-xl font-medium  mb-2">Profile Picture</h2>
        <p className="text-sm  mb-4">Upload a professional profile photo</p>

        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value, ...others } }) => (
            <div className="relative">
              <ImageUploading
                value={value}
                onChange={(e) => onChange(e ? e[0]["data_url"] : "")}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                {...others}
              >
                {({ onImageUpload, onImageRemove, isDragging, dragProps }) => (
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="relative group"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={cn(
                          "rounded-full h-[220px] w-[220px] overflow-hidden",
                          "border-4 border-primary/10",
                          "shadow-lg transition-all duration-300",
                          isDragging && "border-primary border-dashed"
                        )}
                        {...dragProps}
                      >
                        {value ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={value}
                              alt="Profile"
                              fill
                              objectFit="cover"
                              className="rounded-full"
                            />
                            {isHovering && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full">
                                <div className="flex gap-3">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onImageUpload();
                                    }}
                                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                  >
                                    <FiCamera className="h-5 w-5 text-gray-700" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onImageRemove(0);
                                    }}
                                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                  >
                                    <FiTrash2 className="h-5 w-5 text-red-500" />
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            onClick={onImageUpload}
                            className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <FiUpload className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-gray-500 font-medium">
                              Upload Image
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Click or drag & drop
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {!value && (
                      <p className="text-sm  mt-4">
                        Supports JPG, PNG or GIF (Max 5MB)
                      </p>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
          )}
        />
        <input
          type="hidden"
          name="id"
          id="id"
          {...register("id")}
          value={loggedInUserDetails?.id}
        />
        <Button
          type="submit"
          className={cn(
            "px-6 py-2 bg-primary hover:bg-primary/90 transition-colors",
            "font-medium rounded-lg",
            !currentImage && "opacity-50 cursor-not-allowed"
          )}
          disabled={isPending || !currentImage}
        >
          {isPending ? (
            <>
              <span className="animate-spin mr-2">⭮</span>
              Uploading...
            </>
          ) : (
            "Save Profile Picture"
          )}
        </Button>
      </div>
    </form>
  );
}
