import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle({ portfolioTheme, setPortfolioTheme }) {
  const toggleTheme = () => {
    setPortfolioTheme(portfolioTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-5 max-md:p-3 rounded-md bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {portfolioTheme === "light" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
    </button>
  );
}
