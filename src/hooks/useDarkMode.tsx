import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {

  // Check initial preference from localStorage or default to system preference
  const storedPreference = localStorage.getItem('dark-mode');
  const prefersDarkMode = storedPreference ? JSON.parse(storedPreference) : window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the user's preference to localStorage
      localStorage.setItem('dark-mode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // theme Apply
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
