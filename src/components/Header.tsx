// components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import "@/app/globals.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="px-5 py-10 lg:px-32 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between p-4 bg-[var(--nav-background)] rounded-xl shadow ">
        <Image
          src={
            isDarkMode
              ? "/assets/images/logo-white.svg"
              : "/assets/images/logo.svg"
          }
          alt="Browser Extension Manager Logo"
          width={100}
          height={100}
          className="w-auto h-auto"
        />
        <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
    </header>
  );
};

export default Header;
