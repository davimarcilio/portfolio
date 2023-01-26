import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./components/NavigationItem";

export function Header() {
  return (
    <header className="fixed bg-stone-900 container ">
      <NavigationMenu.Root className="w-full">
        <NavigationMenu.List className="flex w-full gap-5 px-10 py-5 justify-between items-center">
          <div className="flex gap-5 items-center">
            <NavigationItem>Logo</NavigationItem>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Stacks</NavigationItem>
            <NavigationItem>Projetos</NavigationItem>
          </div>
          <NavigationMenu.Link href="https://www.linkedin.com/in/davi-marcilio-89a694240/">
            <button className="bg-sky-700 px-6 py-2 rounded-md transition-colors hover:bg-sky-900 font-bold text-xl">
              Conectar
            </button>
          </NavigationMenu.Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
