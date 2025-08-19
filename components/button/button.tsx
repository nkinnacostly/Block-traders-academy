import { BarsLoadingIcon } from "@/public/assets/icons";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  btnText: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({
  onClick,
  btnText,
  className,
  disabled,
  loading,
  type,
}: ButtonProps) {
  return (
    <button
      className={`w-full py-4 rounded-[10px] text-white  mt-5 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loading ? (
        <div
          // style={{
          //   background: bgColor ? bgColor : "#0066FF",
          // }}
          className="flex items-center justify-center"
        >
          <BarsLoadingIcon className="text-inherit text-[2.5em]" />
        </div>
      ) : (
        <>{btnText}</>
      )}
    </button>
  );
}

export default Button;
