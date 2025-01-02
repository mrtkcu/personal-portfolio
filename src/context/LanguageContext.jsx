import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(`/assets/langs/${language}.json`);
        setTranslations(response.data);
      } catch (error) {
        console.error("Error loading language file: ", error);
      }
    };
    fetchTranslations();
    localStorage.setItem("language", language);
  }, [language]);

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ translations, language, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
