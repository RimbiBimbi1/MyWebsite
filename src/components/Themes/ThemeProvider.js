import { createContext, useEffect, useState } from 'react';
import { themes } from './themes';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const storedThemeString = localStorage?.getItem('theme');
  const storage = JSON.parse(storedThemeString);
  const validateStoredTheme = theme => {
    try {
      themes.forEach(item => {
        if (item?.name === theme?.name) throw new Error();
      });
    } catch (e) {
      return true;
    }
    return false;
  };
  const isValid = validateStoredTheme(storage);
  const [theme, setTheme] = useState(isValid ? storage : themes[0]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const cycleThemes = () => {
    if (theme.name === themes[0].name) {
      setTheme(themes[1]);
    } else setTheme(themes[0]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: cycleThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
