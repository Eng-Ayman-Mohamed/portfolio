import React from 'react';
import experienceData from '../../data/experience.json';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Experience.module.css';

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className={`${styles.experience} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience & Education</h2>
          <p className={styles.sectionSubtitle}>My professional journey</p>
        </div>
        
        <div className={styles.timeline}>
          {experienceData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineDate}>{item.date}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineSubtitle}>{item.subtitle}</p>
                
                {item.description && (
                  <ul className={styles.timelineDescription}>
                    {item.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
                
                {item.technologies && (
                  <div className={styles.timelineTech}>
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;