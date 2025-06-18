import React, { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

function IconButton({ children }: IconButtonProps) {
  return (
    <button className="bg-sky-500 w-full min-w-max text-white hover:bg-sky-600 transition-all ease-in-out py-2 px-5 rounded-md">
      {children}
    </button>
  );
}

export default IconButton;
