import Link from "next/link";
import { navigation } from "~/app/_library";

/**
 * bottom menu component
 *
 */

export function BottomMenu() {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto flex h-14 items-center border-t border-border bg-background md:hidden">
      <nav className="w-full px-4">
        <ul className="flex items-center justify-around">
          {navigation.map((item, index) => (
            <li
              className="w-full text-primary"
              key={`mobile-navigation-${index}`}
            >
              <Link href={item.href} className="flex flex-col items-center">
                {item.icon}
                <p className="text-[0.625rem] leading-none text-primary">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
