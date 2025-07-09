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