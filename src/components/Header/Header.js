import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Ayman</span>
          <span className={styles.logoDot}>.</span>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li><a href="#skills" className={styles.navLink}>Skills</a></li>
            <li><a href="#experience" className={styles.navLink}>Experience</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
        
        <div className={styles.themeToggleContainer}>
          <ThemeToggle />
        </div>
        
        <button className={styles.menuButton}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;