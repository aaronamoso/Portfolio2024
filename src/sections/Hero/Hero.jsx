// rfce is a short term for creating a boilerplate like ! for HTML
import styles from "./HeroStyles.module.css";
import React from "react";
import heroImg from "../../assets/hero-img.png";
import meProfile from "../../assets/me_profile.webp";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// social icons dark and light versions
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import AaronAmosoResume from "../../assets/AaronAmosoResume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
 

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero} //reference the styles then class name
          src={meProfile}
          alt="profile picture"
        />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="Color mode icon"
          onClick={toggleTheme}
          p
        />
      </div>
      <div className={styles.info}>
        <h1>
          Aaron <br /> Amoso
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/aaronamoso" target="_blank"><img src={githubIcon} alt="Github icon" className="hover"/></a>
          
          <a href="https://linkedin.com/aaronamoso" target="_blank"><img src={linkedinIcon} alt="Linkedin icon" className="hover"/></a>
          
        </span>
        <p className={styles.description}>With a passion for developing modern web applications</p>
        <a href={AaronAmosoResume} download>
        <div className="button-container">
          <button className="hover">Resume</button>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
