import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingCart as ShoppingCartIcon  } from "lucide-react";

interface NavBarProps {
  title?: string[];
  logo: string;
  onCartClick: () => void;
}

export function NavBar({ title, logo, onCartClick }: NavBarProps) {
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
            <ShoppingCartIcon  className="w-6 h-6 cursor-pointer" onClick={onCartClick} />
          </div>
        </div>
      </div>
    </nav>
  );
}
