import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //Load dark mode preference from localStorage on mount
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Show toast only when dark mode state changes
  useEffect(() => {
    if (isDarkMode) {
      Toastify({
        text: "Dark Mode Activated!",
        duration: 1000, // 3 seconds
        backgroundColor: "green",
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    } else {
      Toastify({
        text: "Light Mode Activated!",
        duration: 1000, // 3 seconds
        backgroundColor: "lightblue",
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    }
  }, [isDarkMode]); // Only run when `isDarkMode` state changes

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", newMode.toString());

      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center h-6 rounded-full w-12 xs:w-18 xs:h-9 transition-all duration-300 ease-in-out  ${
        isDarkMode ? "bg-gray-800" : "bg-lightblue"
      }`}
    >
      <span
        className={`absolute h-4 w-4 bg-yellow xs:h-6 xs:w-6 rounded-full shadow transform transition-transform duration-300 ease-in-out ${
          isDarkMode ? "translate-x-6  bg-gray-400" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default DarkModeToggle;
