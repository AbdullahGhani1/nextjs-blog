import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-24 px-4">
      <div className="flex gap-2 3xl:hidden">
        <Link href="https://www.facebook.com/fareen.waheed" target="_blank">
          <Image
            src="/images/facebook.png"
            alt="facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/fareen-waheed/" target="_blank">
          <Image
            src="/images/instagram.png"
            alt="instagram"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="flex-1 text-center text-3xl font-bold sm:text-center md:text-2xl sm:text-xl">
        Fari blog
      </div>
      <div className="flex items-center gap-5 text-lg sm:justify-end sm:text-base md:gap-4">
        <ThemeToggle />
        <Link href="/" className="hidden sm:inline">
          Homepage
        </Link>
        <Link href="/" className="hidden sm:inline">
          Contact
        </Link>
        <Link href="/" className="hidden sm:inline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
