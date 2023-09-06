import React, { useState } from 'react';
import styles from './Projects.module.css';
import linkTaskWeatherImg1 from '../../../../public/linktaskweather/desktop.webp';
import linkTaskWeatherImg2 from '../../../../public/linktaskweather/mobile.webp';
import linkTaskWeatherImg3 from '../../../../public/linktaskweather/desktop2.webp';
import initialPhoto from '../../../../public/linktaskweather/initialphoto.webp'
import ProjectBox from '../projectBox/ProjectBox';
import initialPhotoOpus from '../../../../public/opusproject/initialPhoto.webp';
import initialPhotoQuizz from '../../../../public/quizzgame/initialPoto.webp';
import initialPhotoKhoder from '../../../../public/khodercart/initialPhoto.webp';
import initialPhotoButton from '../../../../public/buttongenerator/initialPhoto.webp';

function Projects() {

  const projects = [
    {
      title:'Link Task Weather',
      isClientReal:false,
      photos:[linkTaskWeatherImg1, linkTaskWeatherImg2, linkTaskWeatherImg3],
      initialPhoto:initialPhoto,
      titlePath:'https://link-task-weather.vercel.app/',
      gitHubPath:'https://github.com/FilipeSall/LinkTaskWeather',
      netlifyPath:'https://deft-travesseiro-b6ef8c.netlify.app/',
      text: `Criei um site para simplificar minha vida acadêmica. Meu objetivo é fornecer uma plataforma eficiente para transcrever e organizar todas as minhas anotações de estudo de forma simples e intuitiva. Criei um calendário interativo que construí do zero. Esse calendário inclui todos os feriados sazonais mais importantes do ano. Além disso, implementei um componente de clima que utiliza uma API interativa para fornecer informações atualizadas sobre o clima em sua localização. A melhor parte é que a animação do componente muda de acordo com as condições climáticas em tempo real.`,
      inConstruction:true,
    },
    {
      title:'Site Opus',
      initialPhoto:initialPhotoOpus,
      isClientReal:true,
    },
    {
      title:'New Khoder cart menu',
      initialPhoto:initialPhotoKhoder,
      isClientReal: true,
    },
    {
      title:'Quizzgame',
      isClientReal:false,
      initialPhoto:initialPhotoQuizz,
    },
    {
      title:'Button generator',
      isClientReal:false,
      initialPhoto:initialPhotoButton,
    }
  ]


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
        />
      ))}
    </div>
  )
}

export default Projects