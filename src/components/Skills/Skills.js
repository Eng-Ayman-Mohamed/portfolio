import React from 'react';
import skillsData from '../../data/skills.json';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Skills.module.css';

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className={`${styles.skills} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <p className={styles.sectionSubtitle}>Technologies I work with</p>
        </div>
        
        <div className={styles.skillsContainer}>
          {skillsData.map((skillCategory, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>
                <i className={skillCategory.icon}></i> {skillCategory.category}
              </h3>
              
              <div className={styles.skillsGrid}>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <div className={styles.skillIcon}>
                        <i className={skill.icon}></i>
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    
                    <div className={styles.skillLevelBar}>
                      <div 
                        className={styles.skillLevelFill} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <span className={styles.skillLevelText}>{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;