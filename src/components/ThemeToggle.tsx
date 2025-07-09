// components/ThemeToggle.tsx
"use client";

import Image from "next/image";

import { ThemeToggleProps } from "@/lib/type";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }: ThemeToggleProps ) => {
  return (
    <div className="flex items-center">
      {!isDarkMode ? (
        <Image
          src="/assets/images/icon-moon.svg"
          alt="switch to dark mode"
          width={24}
          height={24}
          className="w-auto h-auto bg-[var(--neutral-100)] p-2 rounded-xl cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-300"
          onClick={toggleDarkMode}
        />
      ) : (
        <Image
          src="/assets/images/icon-sun.svg"
          alt="switch to light mode"
          width={24}
          height={24}
          className="w-auto h-auto p-2 rounded-xl cursor-pointer bg-[var(--neutral-600)] transition-colors duration-300"
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
