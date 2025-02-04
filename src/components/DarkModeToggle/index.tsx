import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import './styles.css';

export default function DarkModeToggle() {
  // Check user preference from localStorage
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Apply the theme to body when component mounts or darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="toggle-wrapper">
      {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      <div className={`toggle ${darkMode ? "active" : ""}`} onClick={toggleDarkMode}>
        <div className="toggle-button"></div>
      </div>
    </div>
  );
}