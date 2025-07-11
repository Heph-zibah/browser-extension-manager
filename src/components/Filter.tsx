"use client";
import React from "react";
import type { FilterProps } from "@/lib/type";

const Filter = ({filterOptions, activeFilter, setActiveFilter, view, setView}: FilterProps) => {

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between ">
        <h1 className="text-[var(--neutral-900)] dark:text-white font-bold text-2xl ">
          Extension <span className="md:hidden">List</span>
          <span className="hidden md:inline-block">
            {view === "grid" ? "Grid" : "List"}
          </span>
        </h1>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setView("grid")}
            className={`px-3 py-1 rounded-xl font-medium ${
              view === "grid"
                ? "bg-[var(--red-500)] text-white dark:text-[var(--neutral-900)] hover:bg-[var(--red-700)] transition-colors duration-300"
                : "bg-white text-[var(--neutral-900)] dark:bg-[var(--neutral-700)] dark:text-white hover:text-[var(--neutral-300)] dark:hover:bg-[var(--neutral-600)] dark:hover:text-white transition-colors duration-300"
            }`}
          >
            Grid
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`px-3 py-1 rounded-xl font-medium ${
              view === "list"
                ? "bg-[var(--red-500)] text-white dark:text-[var(--neutral-900)] hover:bg-[var(--red-700)] transition-colors duration-300"
                : "bg-white text-[var(--neutral-900)] dark:bg-[var(--neutral-700)] dark:text-white  hover:text-[var(--neutral-300)] dark:hover:bg-[var(--neutral-600)] dark:hover:text-white transition-colors duration-300"
            }`}
          >
            List
          </button>
        </div>
        <div>
          <ul className="flex items-center gap-4 text-sm font-medium capitalize">
            {filterOptions.map((tab) => {
              return (
                <li
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-full cursor-pointer px-3 py-1 shadow ${
                    activeFilter === tab
                      ? "bg-[var(--red-500)] text-white dark:text-[var(--neutral-900)] hover:bg-[var(--red-700)] transition-colors duration-300"
                      : "bg-white dark:bg-[var(--neutral-700)] text-[var(--neutral-900)] dark:text-white hover:text-[var(--neutral-300)] dark:hover:bg-[var(--neutral-600)] dark:hover:text-white transition-colors duration-300"
                  }`}
                >
                  {tab}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filter;
