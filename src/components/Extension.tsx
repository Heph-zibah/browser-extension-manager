"use client";
import React from "react";
import type { Extension } from "@/lib/type";
import {useExtension} from "@/hooks/useExtension";
import Filter from "@/components/Filter";
import ExtensionGrid from "@/components/ExtensionGrid";
import ExtensionList from "@/components/ExtensionList";

const Extension = () => {
  const {
    activeFilter,
    setActiveFilter,
    view,
    setView,
    filteredLists,
    handleToggle,
    handleRemove,
    filterOptions,
  } = useExtension();

  return (
    <section className="px-5 pb-3 lg:px-32 max-w-7xl mx-auto ">
      <Filter filterOptions={filterOptions} activeFilter={activeFilter} setActiveFilter={setActiveFilter} view={view} setView={setView}/>
      {view === "grid" ? (
        <ExtensionGrid
          filteredLists={filteredLists}
          activeFilter={activeFilter}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ) : (
        <ExtensionList
          filteredLists={filteredLists}
          activeFilter={activeFilter}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      )}
    </section>
  );
};

export default Extension;
