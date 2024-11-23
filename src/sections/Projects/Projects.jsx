import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import logo from '/src/assets/logo_favicon.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={logo} 
           link='https://github.com/aaronamoso/finance-splitter'
           h3='Finance/Bill Splitter'
           p='A web app that allows users to split their personal finances and bills.'/>
    
     <ProjectCard src={logo} 
           link='https://github.com/aaronamoso/Slot-Machine-Project'
           h3='JavaScript Slot Machine'
           p='A simple slot machine built using HTML, CSS, and JavaScript.'/>
    
        </div>
    </section>
  ) 
}

export default Projects