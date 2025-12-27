import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ColorPicker from './components/ColorPicker/ColorPicker'; // Use test version
import styles from './styles/App.module.css';

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ColorPicker /> 
      </div>
    </ThemeProvider>
  );
}

export default App;