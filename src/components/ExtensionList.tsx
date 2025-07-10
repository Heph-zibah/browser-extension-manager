"use client"
import React from "react";
import Image from "next/image";
import type { ExtensionProps } from "@/lib/type";

const ExtensionList = ({
  filteredLists,
  handleRemove,
  handleToggle,
}: ExtensionProps) => {
  return (
    <section className="hidden md:block">
      <div className=" mt-6 space-y-5">
        {filteredLists.map((item) => (
          <div
            key={item.name}
            className="bg-white dark:bg-[var(--neutral-700)] text-[var(--neutral-900)] dark:text-white rounded-xl py-3 px-3 shadow-lg grid grid-cols-6 items-center justify-center gap-8"
          >
            <div>
              <Image
                src={item.logo}
                alt={item.name}
                width={50}
                height={50}
                className=" col-span-1 "
              />
            </div>

            <h1 className="text-xl font-bold mb-2 flex-3 col-span-1">
              {item.name}
            </h1>
            <p className="font-medium text-[var(--neutral-600)] text-sm dark:text-[var(--neutral-300)] flex-wrap col-span-2">
              {item.description}
            </p>

            <button
              type="button"
              onClick={() => handleRemove(item.name)}
              className="text-sm py-2 px-4 rounded-full border border-[var(--neutral-300)] font-medium focus:ring-2 focus:ring-[var(--red-500)] dark:focus:ring-[var(--red-400)] text-[var(--neutral-900)] dark:text-white hover:bg-[var(--red-700)] hover:text-white dark:hover:bg-[var(--red-700)] dark:hover:text-[var(--neutral-900)] dark:hover:border-none transition-colors duration-300"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={() => handleToggle(item.name)}
              className={`w-11 h-6 rounded-full  col-span-1 mx-auto  transition-colors duration-300 focus:ring-2 focus:ring-[var(--red-500)] dark:focus:ring-[var(--red-400)]  ${
                item.isActive
                  ? "bg-[var(--red-700)] dark:bg-[var(--red-500)] hover:bg-[var(--red-500)] dark:hover:bg-[var(--red-700)]"
                  : "bg-[var(--neutral-300)]"
              }`}
            >
              <div
                className={`bg-white rounded-full w-5 h-5 mx-[2px] transition-transform duration-300 ${
                  item.isActive ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtensionList