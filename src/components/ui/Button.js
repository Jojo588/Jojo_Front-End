import React from "react";
import clsx from "clsx";

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCA311]-500";

  const variantStyles = {
    default: "",
    outline: "border border-[#FCA311]-600 text-[#FCA311]-600 hover:bg-[#FCA311]-50",
    ghost: "text-[#FCA311] hover:bg-[#EAEAEA]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
