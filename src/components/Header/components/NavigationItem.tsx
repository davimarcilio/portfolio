import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

interface NavigationItemProps {
  children: ReactNode;
}

export function NavigationItem({ children }: NavigationItemProps) {
  return (
    <NavigationMenu.Link
      href="#projects"
      className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
    >
      {children}
    </NavigationMenu.Link>
  );
}
