import  { useState } from "react";
import data from "@/data/data.json";
import type { Extension } from "@/lib/type";
export const useExtension = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lists, setLists] = useState<Extension[]>(data);
  const [view, setView] = useState<"list" | "grid">("grid");
  const filterOptions = ["All", "Active", "Inactive"];

  const filteredLists = lists.filter((tab) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Active") return tab.isActive;
    if (activeFilter === "Inactive") return !tab.isActive;
    return true;
  });

  const handleRemove = (name: string) => {
    setLists((prev) => prev.filter((item) => item.name !== name));
  };
  const handleToggle = (name: string) => {
    setLists((prevLists) =>
      prevLists.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
 
  return {
    activeFilter,
    setActiveFilter,
    lists,
    view,
    setView,
    filteredLists,
    handleToggle,
    handleRemove,
    filterOptions,
  };
};

