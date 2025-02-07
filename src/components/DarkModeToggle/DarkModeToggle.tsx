import { useCallback, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import './DarkmodeToggle.scss';

export default function DarkModeToggle() {
  // Check user preference from localStorage
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");
  const [isFocus, setIsFocus] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = useCallback(() => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  }, [darkMode]);

  // Apply the theme to body when component mounts or darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Add event listener to toggle dark mode
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.key === 'Enter' || event.key === ' ') && isFocus) {
        toggleDarkMode()
      }
    }

    // add listener
    document.addEventListener('keydown', listener)

    // remove listener
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [darkMode, isFocus, toggleDarkMode])

  return (
    <div className="darkmode">
      {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      <div
        tabIndex={0}
        className={`darkmode__switch ${darkMode ? "darkmode__switch--active" : ""}`}
        onClick={toggleDarkMode}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        <div className="darkmode__button" />
      </div>
    </div>
  );
}