"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectBox.module.css';
import Image, { StaticImageData } from 'next/image';
import ProjectModal from '../projectModal/ProjectModal';

interface PropsTypes {
  title: string,
  photos?: StaticImageData[],
  initialPhoto: StaticImageData,
  isClientReal: boolean,
  titlePath?: string,
  gitHubPath?: string,
  netlifyPath?: string,
  text?: string,
  inConstruction?:boolean,
  googleStatusImg?:StaticImageData,
}

function ProjectBox({ title, photos, isClientReal, titlePath, gitHubPath, netlifyPath, initialPhoto,text, inConstruction, googleStatusImg }: PropsTypes) {

  const [modal, setModal] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const parentElement = e.currentTarget.parentNode as HTMLElement;
  }

  return (
    <>
      <button className={styles.container} onClick={handleClick}>
        <Image className={styles.projectBtn} src={initialPhoto} alt={title} onClick={() => setModal(!modal)} />
        {isClientReal === true ? <h1 className={styles.titleClientreal}>Cliente real</h1> : <h1 className={styles.titlePersonalProject}>Projeto pessoal</h1>}
      </button>
      {modal && <ProjectModal
        setModal={setModal}
        title={title}
        titlePath={titlePath}
        gitHubPath={gitHubPath}
        netlifyPath={netlifyPath}
        text={text}
        inConstruction={inConstruction}
        photos={photos}
        googleStatusImg={googleStatusImg}
      />}
    </>
  )
}

export default ProjectBox