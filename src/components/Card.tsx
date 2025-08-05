import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};


export function CardHeader({ children, className }: CardProps) {
  return <div className={clsx("mb-2", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={clsx("text-lg font-semibold", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={clsx("text-sm text-gray-600", className)}>{children}</p>;
}
