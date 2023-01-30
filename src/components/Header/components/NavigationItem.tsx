import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

interface NavigationItemProps {
  children: ReactNode;
  href?: string;
}

export function NavigationItem({ children, href }: NavigationItemProps) {
  return (
    <NavigationMenu.Link
      href={href}
      className="list-none border-b-4 border-t-4 border-transparent transition-colors p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
    >
      {children}
    </NavigationMenu.Link>
  );
}
