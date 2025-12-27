import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.themeToggle} ${isDarkMode ? styles.dark : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}></div>
      </div>
      <div className={styles.icons}>
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
      </div>
    </button>
  );
};

export default ThemeToggle;