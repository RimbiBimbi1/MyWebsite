import { useContext } from 'react';
import { ThemeContext } from '../components/Themes/ThemeProvider';

export const useTheme = () => {
  return useContext(ThemeContext);
};
