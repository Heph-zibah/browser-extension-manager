"use client"
import React, {useState} from 'react'
import data from "@/data/data.json"
import Image from 'next/image';
import { Extension } from "@/lib/type";



const ExtensionGrid = () => {
   const lists: Extension[] =data
   const tabs = ["all", "active", "inactive"]
   const [filter, setFilter] = useState<string[]>(tabs);
  return (
    <section className="px-5 pb-3 lg:px-32 max-w-7xl mx-auto ">
      <div className="flex items-center justify-between ">
        <h1 className="text-[var(--neutral-900)] dark:text-white font-bold text-2xl">
          Extension List
        </h1>
        <div>
          <ul className="flex items-center gap-4 text-sm font-medium capitalize">
            {filter.map((tab) => (
              <li key={tab}>{tab}</li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li className="bg-[var(--red-500)] rounded-full cursor-pointer px-3 py-1 shadow text-white dark:text-[var(--neutral-900)] dark:border  dark:border-[var(--neutral-900)]">
              All
            </li>
            <li className="bg-white dark:bg-[var(--neutral-700)] rounded-full cursor-pointer px-3 py-1 shadow dark:text-white text-[var(--neutral-900)]  dark:border  dark:border-[var(--neutral-600)]">
              Active
            </li>
            <li className="bg-white dark:bg-[var(--neutral-700)] rounded-full cursor-pointer px-3 py-1 shadow dark:text-white text-[var(--neutral-900)]  dark:border  dark:border-[var(--neutral-600)]">
              Inactive
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mt-6">
        {lists.map((item) => (
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
                className="text-sm py-2 px-4 rounded-full border border-[var(--neutral-300)] font-medium"
              >
                Remove
              </button>
              <button
                type="button"
                className="w-11 h-6 rounded-full bg-[var(--red-700)] dark:bg-[var(--red-500)]  transition-colors duration-300"
              >
                <div className="bg-white rounded-full w-5 h-5 mx-[2px] transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtensionGrid