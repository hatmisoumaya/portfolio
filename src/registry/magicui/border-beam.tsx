import React from "react";

export const BorderBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative z-10 overflow-hidden border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 ${className}`}
    >
<div className="absolute inset-[1px] rounded-[inherit] bg-white/5 dark:bg-white/5 backdrop-blur-md z-10"></div>
      {children}
    </div>
  );
};
