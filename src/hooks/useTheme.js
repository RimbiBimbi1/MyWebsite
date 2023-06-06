import { useContext } from 'react';
import { ThemeContext } from '../common/ThemeProvider';

export const useTheme= () => {
  return useContext(ThemeContext);
};