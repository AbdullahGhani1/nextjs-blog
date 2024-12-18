"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`w-10 h-5 rounded-full cursor-pointer flex items-center p-1 ${
        theme === "dark" ? "bg-white" : "bg-gray-800"
      }`}
    >
      {theme !== "dark" && (
        <Image src="/images/moon.png" alt="moon" width={14} height={14} />
      )}
      <div
        className={`w-4 h-4 rounded-full transition-transform transform ${
          theme === "dark"
            ? "bg-gray-800 translate-x-0"
            : "bg-white translate-x-1"
        }`}
      ></div>
      {theme === "dark" && (
        <Image src="/images/sun.png" alt="sun" width={14} height={14} />
      )}
    </div>
  );
};

export default ThemeToggle;
