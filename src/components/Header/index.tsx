import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./components/NavigationItem";

export function Header() {
  return (
    <header
      // className="not-sr-only"
      className="fixed bg-stone-900 container z-20"
    >
      <NavigationMenu.Root className="w-full max-sm:hidden">
        <NavigationMenu.List className="flex w-full gap-5 px-10 py-5 justify-between items-center">
          <div className="flex gap-5 items-center">
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
            <button className="bg-sky-700 px-6 py-2 rounded-md transition-colors hover:bg-sky-900 font-bold text-xl">
              Conectar
            </button>
          </NavigationMenu.Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
