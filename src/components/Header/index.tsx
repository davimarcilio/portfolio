import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./components/NavigationItem";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { List, Plus } from "phosphor-react";
import Link from "next/link";
export function Header() {
  return (
    <header
      // className="not-sr-only"
      className="fixed bg-stone-900 container max-sm:left-0 z-20"
    >
      <NavigationMenu.Root className="w-full max-sm:hidden">
        <NavigationMenu.List className="flex w-full gap-5 px-10 py-5 shadow-2xl justify-between items-center">
          <div className="flex gap-5 items-center ">
            <NavigationItem href="#home">Logo</NavigationItem>
            <NavigationItem href="#home">Home</NavigationItem>
            <NavigationItem href="#about">Sobre</NavigationItem>
            <NavigationItem href="#stacks">Stacks</NavigationItem>
            <NavigationItem href="#experience">Experiência</NavigationItem>
            <NavigationItem href="#projects">Projetos</NavigationItem>
          </div>
          <NavigationMenu.Link
            target={"_blank"}
            href="https://www.linkedin.com/in/davi-marcilio-89a694240/"
          >
            <button className="bg-sky-700 px-6 py-2 rounded-md transition-colors flex items-center justify-center gap-3 hover:bg-sky-900 font-bold text-xl">
              <Plus size={22} weight="bold" />
              Conectar
            </button>
          </NavigationMenu.Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="bg-stone-900 py-1 hidden max-sm:px-5 max-sm:flex focus:outline-none">
          <List size={50} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            data-aos="slide-right"
            className="text-gray-100 font-inter w-screen bg-neutral-800 px-6 py-3 flex flex-col gap-5 shadow-2xl"
          >
            <DropdownMenu.Item asChild>
              <Link
                className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
                href="#home"
              >
                Home
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
                href="#about"
              >
                Sobre
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
                href="#stacks"
              >
                Stacks
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
                href="#experience"
              >
                Experiência
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                className="list-none border-b-4 border-t-4 border-transparent p-2 hover:cursor-pointer hover:border-b-cyan-500 font-bold text-xl"
                href="#projects"
              >
                Projetos
              </Link>
            </DropdownMenu.Item>
            <button className="bg-sky-700 px-6 w-full py-2 rounded-md transition-colors flex justify-center items-center gap-2 hover:bg-sky-900 font-bold text-xl">
              <Plus size={22} weight="bold" />
              Conectar
            </button>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
}
