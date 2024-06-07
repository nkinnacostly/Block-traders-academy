/* eslint-disable no-useless-escape */
"use client";

import React, { useState } from "react";

import { AnimatePage } from "@/src/components/animations/page";
import Button from "@/src/components/dashboard/button/button";
import { FaCircle } from "react-icons/fa";
import LoginHeader from "@/src/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/src/components/dashboard/input/passwordInput";
import TextInput from "@/src/components/dashboard/input/textInput";
import { storage } from "@/src/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/src/hooks/useCustonApiQuery";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/user-store";
import { z } from "zod";

// console.log(toast, "This is toast");

function SignUp() {
  const {
    email,
    username,
    password,
    setEmail,
    setUserName,
    setPassword,
    notification_status,
    setNotification,
  } = useUserStore();
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  // const { theme } = useTheme();
  const router = useRouter();
  const isAnyInputEmpty = () => {
    return !email || !username || !password;
  };

  const [isValid, setIsValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const SignUpSchema = z.object({
    email: z
      .string()
      .regex(/^\S+@\S+\.\S+$/)
      .email(),
    username: z.string().min(3),
    password: z.string().min(8),
  });

  const handleUserInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
      setIsValid({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      });
    } else if (name === "notification") {
      setNotification(1);
    }
  };
  const { mutateAsync, isPending } = useMutationRequest();

  const handleSubmit = async () => {
    const errorMap = {
      "string.email": "Invalid email address",
      "string.min": "Must be at least {{min}} characters",
    };
    try {
      SignUpSchema.parse({ email, password, username }, { errorMap });
      await mutateAsync(
        {
          method: "POST",
          url: "/sign-up",
          data: { email, password, username, notification_status },
        },
        {
          onSuccess: (data) => {
            toast.success(data.message);
            storage.localStorage.set("user", data.user);
            storage.localStorage.set("__session", data.data?.token);
            router.push("/auth/login");
          },
          onError: (error) => {
            toast.error(error.message);
            // console.log(error, "This is error");
          },
        }
      );
      // {
      //   mutation.isSuccess(console.log("active"));
      // }
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };

  // console.log(isValid, "This is valid");
  // mutation.isSuccess(console.log("Mutation successful"));
  return (
    <div className="h-full w-full  flex flex-col items-start px-10 ">
      <LoginHeader />
      <TextInput
        inputText={"Email"}
        placeholder={"Enter your Email Address"}
        onChange={handleUserInputs}
        name={"email"}
      />
      <TextInput
        inputText={"Username"}
        placeholder={"Enter Username"}
        onChange={handleUserInputs}
        name={"username"}
      />
      <PasswordInput
        inputText={"Password"}
        setIsValid={setIsValid}
        onChange={handleUserInputs}
        name={"password"}
      />
      <div className="grid grid-cols-2 gap-5">
        <div
          className={`${
            isValid.length ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2  truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>Use 8 or more characters</span>
        </div>
        <div
          className={`${
            isValid.uppercase ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One Uppercase character</span>
        </div>
        <div
          className={`${
            isValid.lowercase ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2  truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One lowercase character</span>
        </div>
        <div
          className={`${
            isValid.specialChar ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 `}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One special character</span>
        </div>
        <div
          className={`${
            isValid.number ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 `}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One Number</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-5">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm"
          name="notification"
          onChange={handleUserInputs}
        />
        <p className="text-[16px] font-[400] text-[#1E1E1E]">
          I want to receive emails about the product, feature updates, events,
          and marketing promotions.
        </p>
      </div>
      <p className="text-[16px] font-[400] text-[#1E1E1E] p-2 mt-2">
        {" "}
        By creating an account, you agree to the{" "}
        <span className="underline cursor-pointer">Terms of use</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
      <Button
        btnText={"Sign Up"}
        className={"disabled:bg-gray-400 bg-yellow-400"}
        onClick={handleSubmit}
        disabled={isAnyInputEmpty() || isPending}
        loading={isPending}
      />
      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer text-[#EE1D52]"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default AnimatePage(SignUp);
// export const Component = AnimatePage(SignUp);