"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// Define available languages
export const AVAILABLE_LANGUAGES = ["en", "es"];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations when language changes
    const loadTranslations = async () => {
      try {
        // Only load if it's an available language
        if (AVAILABLE_LANGUAGES.includes(language)) {
          const translations = await import(`./locales/${language}.json`);
          setTranslations(translations.default);
        } else {
          // Fallback to English if language not available
          const translations = await import(`./locales/en.json`);
          setTranslations(translations.default);
          setLanguage("en"); // Reset to English
        }
      } catch (error) {
        console.error(`Error loading translations for ${language}:`, error);
        // Fallback to English on error
        try {
          const translations = await import(`./locales/en.json`);
          setTranslations(translations.default);
          setLanguage("en");
        } catch (fallbackError) {
          console.error("Error loading fallback translations:", fallbackError);
          setTranslations({}); // Empty translations as last resort
        }
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (newLang) => {
    if (AVAILABLE_LANGUAGES.includes(newLang)) {
      setLanguage(newLang);
      localStorage.setItem("preferredLanguage", newLang);
      document.documentElement.lang = newLang;
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && AVAILABLE_LANGUAGES.includes(savedLanguage)) {
      changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        translations,
        availableLanguages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
