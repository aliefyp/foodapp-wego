import { useCallback, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import './DarkmodeToggle.scss';

/**
 * A React component that provides a toggle switch for dark mode.
 * 
 * This component checks the user's theme preference from localStorage and applies
 * the preferred theme to the document body. It allows users to toggle between dark 
 * and light modes, persisting the selection in localStorage. It also captures focus 
 * and keyboard events to enable toggling via the 'Enter' or 'Space' keys.
 * 
 * The component uses icons to represent the current mode (sun for light mode, moon for dark mode)
 * and provides a visual switch that can be activated via mouse click or keyboard interaction.
 */

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
    <div className="darkmode" data-testid="darkmode-toggle">
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