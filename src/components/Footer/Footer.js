import React from 'react';
import personalData from '../../data/personal.json';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Ayman</span>
              <span className={styles.logoDot}>.</span>
            </div>
            <p className={styles.footerBio}>
              A passionate software engineer building the future one line of code at a time.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Connect</h3>
            <div className={styles.footerSocial}>
              {personalData.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerSocialLink}
                  aria-label={link.name}
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Ayman Mohamed. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <i className="fas fa-heart" style={{color: '#e74c3c'}}></i> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;