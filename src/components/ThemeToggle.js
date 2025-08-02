export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
