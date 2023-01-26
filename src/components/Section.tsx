import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`flex w-full h-screen max-h-screen items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
