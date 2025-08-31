import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { useColorScheme } from 'react-native';
import { themes } from '../constants/themes';

export type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme: typeof themes.light;
  themeType: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  themeType: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>(
    systemTheme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    if (systemTheme) {
      setThemeType(systemTheme === 'dark' ? 'dark' : 'light');
    }
  }, [systemTheme]);

  const toggleTheme = () => {
    setThemeType(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeType === 'light' ? themes.light : themes.dark;

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
