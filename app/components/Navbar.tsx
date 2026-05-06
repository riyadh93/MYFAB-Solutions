"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/materials", label: "Materials" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-amber-300 text-[28px]">
            precision_manufacturing
          </span>
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-amber-200 font-space-grotesk"
          >
            MyFab Solutions
          </Link>
        </div>
        <div className="hidden md:flex gap-8 items-center font-space-grotesk text-sm tracking-tight">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-amber-200 border-b-2 border-amber-300 pb-1 hover:text-amber-100 transition-all duration-200 active:scale-95"
                  : "text-zinc-400 hover:text-amber-200 transition-all duration-200 active:scale-95"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
