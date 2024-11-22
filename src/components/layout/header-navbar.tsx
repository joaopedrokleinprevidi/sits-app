import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/shadcn/dropdown-menu";
import Link from "next/link";

const navbarOptions = [
  { name: "Início", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Consultoria gratuita", href: "#" },
];

export function HeaderNavbar() {
  return (
    <>
      {/* Menu hambúrguer aparece em telas pequenas */}
      <div className="flex md:hidden items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-white">
              <Menu className="w-6 h-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="bottom"
            className="absolute left-0 bg-pBackground p-5 min-w-[200px] w-min mt-2 md:hidden"
          >
            <nav>
              <ul className="flex flex-col gap-y-4 text-[18px] font-poppins">
                {navbarOptions.map((option) => (
                  <li key={`${option.name}-${option.href}`}>
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href={option.href}>{option.name}</Link>
                    </DropdownMenuItem>
                  </li>
                ))}
              </ul>
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menu normal para telas maiores */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-x-10 text-[18px] text-white font-poppins">
          {navbarOptions.map((option) => (
            <li key={`${option.name}-${option.href}`}>
              <Link href={option.href} className="hover:text-pHoverText">
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
