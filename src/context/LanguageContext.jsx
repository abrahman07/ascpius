import { useState, useEffect } from 'react';
import { LanguageContext } from './contextInstance';
import translations from './languages';

export function LanguageProvider({ children }) {
  // Initialize from localStorage or default to 'en'
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('selectedLanguage');
      return savedLang && translations[savedLang] ? savedLang : 'en';
    } catch {
      return 'en';
    }
  });
  
  const t = translations[currentLang];

  // Save language to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('selectedLanguage', currentLang);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  }, [currentLang]);

  // Update document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
  }, [t]);

  const switchLanguage = (code) => {
    if (translations[code]) {
      setCurrentLang(code);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
