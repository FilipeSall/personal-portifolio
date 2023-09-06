import React from 'react';
import styles from './ProjectModal.module.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

interface ModalTypes {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string,
    titlePath?: string,
    gitHubPath?: string,
    netlifyPath?: string,
    text?:string,
    inConstrutction?:boolean,
}


function ProjectModal({ setModal, title, titlePath, gitHubPath, netlifyPath,text, inConstrutction }: ModalTypes) {

    return (
        <div className={styles.container}>
            <AiFillCloseCircle className={styles.closeBtn} onClick={() => setModal(false)} fill='#CF3434' size={55} />
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.iconTitleContainer}>
                    <a href={gitHubPath} className={styles.iconBoxModel} style={{ backgroundColor: '#52489C' }} target='_blank'>
                        <AiFillGithub size={40} />
                    </a>
                    <a href={netlifyPath} className={styles.iconBoxModel} style={{ backgroundColor: '#cf3434' }} target='_blank' > <BiLogoNetlify size={40} /> </a>
                    <a href={titlePath} className={styles.iconBoxModel} style={{ backgroundColor: '#C6A15B' }} target='_blank'> <SiVercel size={37} /> </a>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal