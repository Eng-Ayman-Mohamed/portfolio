import React from 'react';
import personalData from '../../data/personal.json';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Hero.module.css';

import profileImage from '../../data/profile.jpg';
const Hero = () => {
  const { isDarkMode } = useTheme();
  const { name, title, location, bio, socialLinks } = personalData;

  return (
    <section className={`${styles.hero} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.location}><i className="fas fa-map-marker-alt"></i> {location}</p>
          <p className={styles.bio}>{bio}</p>
          
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryButton}>
              Get In Touch
            </a>
            <a href="#projects" className={styles.secondaryButton}>
              View My Work
            </a>
          </div>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.profileImage}>
            <img 
              src={profileImage} 
              alt={`${name} - ${title}`}
              className={styles.profilePicture}
            />
            <div className={styles.imageDecoration}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;