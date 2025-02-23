import { useState } from "react";
import "../styles/ThemeToggle.scss";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
