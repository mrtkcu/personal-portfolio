import { useEffect, useState } from "react";

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
      className={`relative inline-flex items-center h-6 rounded-full w-12 transition-all duration-300 ease-in-out xs:bg-white ${
        isDarkMode ? "bg-gray-800" : "bg-lightblue"
      }`}
    >
      <span
        className={`absolute h-4 w-4 bg-yellow rounded-full shadow transform transition-transform duration-300 ease-in-out ${
          isDarkMode ? "translate-x-6 bg-gray-400" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default DarkModeToggle;
