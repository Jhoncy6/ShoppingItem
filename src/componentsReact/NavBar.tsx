import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";

interface NavBarProps {
  title?: string[];
  logo: string;
}

export function NavBar({ title, logo }: NavBarProps) {
  return (
    <nav className="inset-x-0 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">

          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-20" />
          </a>

          <NavigationMenu className="md:flex">
            <NavigationMenuList className="flex gap-6">
              {title &&
                title.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-medium flex items-center text-sm hover:underline"
                  >
                    {item}
                  </a>
                ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
