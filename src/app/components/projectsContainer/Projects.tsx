import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectBox from '../projectBox/ProjectBox';
import projects from './ProjectList';

function Projects() {

  return (
    <div className={styles.projectsSection} id='projects'>
      {projects.map((project, i) => (
        <ProjectBox 
        key={i}
        isClientReal={project.isClientReal}
        photos={project.photos}
        title={project.title}
        titlePath={project.titlePath}
        gitHubPath={project.gitHubPath}
        netlifyPath={project.netlifyPath}
        initialPhoto={project.initialPhoto}
        text={project.text}
        inConstruction={project.inConstruction}
        googleStatusImg={project.googleStatusImg}
        />
      ))}
    </div>
  )
}

export default Projects;