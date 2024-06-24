"use client";

import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import { navigation } from "~/app/_library";

/**
 * header component
 *
 */

export function Header() {
  const { setTheme, theme } = useTheme();

  // === return ===//
  return (
    <header className="sticky inset-x-0 top-0 mx-auto flex h-14 w-full items-center border-b border-border bg-background px-4 md:h-16">
      <div className="mx-auto flex w-full max-w-5xl justify-between">
        <h1 className=" text-xl text-primary md:text-3xl">
          <Link href="/" className="transition hover:opacity-70">
            [user name]&apos;s Todo
          </Link>
        </h1>
        <div className="flex items-center gap-8">
          <nav className="max-md:hidden">
            <ul className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <li className="text-primary" key={`desktop-nav-${index}`}>
                  <Link href={item.href} className="group relative pb-1">
                    <span className="absolute inset-x-0 bottom-0 h-0.5 w-full scale-0 bg-border transition duration-300 group-hover:scale-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Switch
            asChild
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className=""
          >
            <DarkModeIcon
              fontSize="small"
              className="group-data-[state=checked]:hidden"
            />
            <LightModeIcon
              fontSize="small"
              className="group-data-[state=unchecked]:hidden"
            />
          </Switch>
        </div>
      </div>
    </header>
  );
}
