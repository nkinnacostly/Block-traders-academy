"use client";
import { useLanguage } from "@/app/i18n/LanguageProvider";

function UserLanguage() {
  const { language, changeLanguage, translations, availableLanguages } =
    useLanguage();

  const languageNames = {
    en: "English",
    es: "Español",
  };

  return (
    <div className="flex flex-col items-start justify-start w-full p-4 space-y-5 shadow-xl rounded-xl border-2">
      <p className="text-xl font-medium mt-[2rem] text-start">
        {translations?.common?.languageAndRegion || "Language and Region"}
      </p>
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <p>{translations?.common?.language || "Language"}</p>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="w-full max-w-xs p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {availableLanguages.map((langCode) => (
            <option key={langCode} value={langCode}>
              {languageNames[langCode]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default UserLanguage;
