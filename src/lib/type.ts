export interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface ExtensionProps {
  filteredLists: Extension[];
  activeFilter: string;
  handleRemove: (name: string) => void;
  handleToggle: (name: string) => void;
}

export interface FilterProps {
  filterOptions: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
}