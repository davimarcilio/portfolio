import { ReactNode } from "react";

interface TechItemProps {
  children: ReactNode;
}

export function TechItem({ children }: TechItemProps) {
  return (
    <span className="bg-indigo-700 px-3 py-1 rounded-full max-w-fit min-w-fit keen-slider__slide">
      {children}
    </span>
  );
}
