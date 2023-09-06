"use client";
import styles from './page.module.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf, AiOutlineDown } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { useEffect, useState } from 'react';
import Projects from './components/projectsContainer/Projects';

const languages = ['REACTJS', 'NEXTJS', 'JAVASCRIPT', 'NODEJS', 'TYPESCRIPT'];

export default function Home() {

  const fillIcon = '#c59ae3';
  const sizeIcon = 70

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);

    }, 3000);

    return () => clearInterval(interval);
  }, [currentLanguageIndex]);

  const currentLanguage = languages[currentLanguageIndex];


  return (
    <>
      <main className={styles.main}>
        <div className={styles.introContainer}>
          <p className={styles.meetingText}>OI, ✌️ EU SOU O FILIPE</p>
          <h1 className={styles.title}>
            <div className={styles.reactLine}>
              REACT
              <ul className={styles.linkContainer}>
                <li>
                  <a href='https://github.com/FilipeSall' target='_blank'>
                    <AiFillGithub fill={fillIcon} size={sizeIcon} />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/filipe-salles-69aa38163/' target='_blank'>
                    <AiFillLinkedin fill={fillIcon} size={sizeIcon} />
                  </a>
                </li>
                <li>
                  <a href='/resume.pdf' download>
                    <AiOutlineFilePdf fill={fillIcon} size={sizeIcon} />
                  </a>
                </li>
              </ul>
            </div>
            <br />
            DEVELOPER</h1>
          <p className={styles.leavingText}>EU SEI PROGRAMAR EM <span>
            {currentLanguage === 'REACTJS' ? (
              <FaReact className={styles.changing_word} fill='#61dafb' size={30} />
            ) : currentLanguage === 'NEXTJS' ? (
              <TbBrandNextjs fill='#000000' className={styles.changing_word} size={30} />
            ) : currentLanguage === 'JAVASCRIPT' ? (
              <IoLogoJavascript fill='#f7df1e' className={styles.changing_word} size={30} />
            ) : currentLanguage === 'NODEJS' ? (
              <FaNodeJs fill='#339933' className={styles.changing_word} size={30} />
            ) : currentLanguage === 'TYPESCRIPT' && (
              <SiTypescript fill='#3178C6' className={styles.changing_word} size={30} />
            )}
          </span></p>
          <a href='#projects' className={styles.nextBtn}><AiOutlineDown fill={'#c31432'} /></a>
        </div>
      </main>
      <div className={styles.projectsContainer}>
        <Projects />
      </div>
    </>
  )
}
