import  {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo
} from 'react';



const STORAGE_KEY = 'portfolio-theme';

const DEFAULT_COLORS = {
  primary: '#4361ee',
  secondary: '#3a56d4',
  accent: '#4895ef'
};



const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


export const ThemeProvider = ({ children }) => {


  const getInitialState = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          darkMode: parsed.darkMode ?? false,
          colors: parsed.colors ?? DEFAULT_COLORS
        };
      }
    } catch (e) {
      console.error('Failed to load theme:', e);
    }

    return {
      darkMode: false,
      colors: DEFAULT_COLORS
    };
  };

  const [themeState, setThemeState] = useState(getInitialState);


  const { darkMode, colors } = themeState;



  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--accent', colors.primary);
    root.style.setProperty('--accent-dark', colors.secondary);
    root.style.setProperty('--accent-light', colors.accent);
  }, [colors]);



  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark-mode');
      root.style.setProperty('--bg-primary', '#121212');
      root.style.setProperty('--bg-secondary', '#1e1e1e');
      root.style.setProperty('--text-primary', '#f0f0f0');
      root.style.setProperty('--text-secondary', '#b0b0b0');
      root.style.setProperty('--border', '#333333');
    } else {
      root.classList.remove('dark-mode');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8f9fa');
      root.style.setProperty('--text-primary', '#333333');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--border', '#e0e0e0');
    }
  }, [darkMode]);



  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(themeState)
    );
  }, [themeState]);


  const toggleTheme = () => {
    setThemeState(prev => ({
      ...prev,
      darkMode: !prev.darkMode
    }));
  };

  const updateColors = (newColors) => {
    setThemeState(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        ...newColors
      }
    }));
  };

  const resetColors = () => {
    setThemeState(prev => ({
      ...prev,
      colors: DEFAULT_COLORS
    }));
  };


  const value = useMemo(() => ({
    isDarkMode: darkMode,
    toggleTheme,
    customColors: colors,
    updateColors,
    resetColors
  }), [darkMode, colors]);


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
