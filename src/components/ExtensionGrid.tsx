"use client"
import React from "react";
import Image from "next/image";
import type { ExtensionProps } from "@/lib/type";

const ExtensionGrid = ({
  filteredLists,
  handleRemove,
  handleToggle,
}: ExtensionProps) => {
  return (
    <section>
      <div className="grid lg:grid-cols-3 gap-5 mt-6">
        {filteredLists.map((item) => (
          <div
            key={item.name}
            className="bg-white dark:bg-[var(--neutral-700)] text-[var(--neutral-900)] dark:text-white rounded-xl py-5 px-3 shadow-lg flex flex-col justify-between gap-8"
          >
            <div className="flex  gap-4">
              <div>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-auto h-auto "
                />
              </div>
              <div>
                <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                <p className="font-medium text-[var(--neutral-600)] text-sm dark:text-[var(--neutral-300)]">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
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
                className={`w-11 h-6 rounded-full   transition-colors duration-300 focus:ring-2 focus:ring-[var(--red-500)] dark:focus:ring-[var(--red-400)]  ${
                  item.isActive
                    ? "bg-[var(--red-700)] dark:bg-[var(--red-500)]"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtensionGrid