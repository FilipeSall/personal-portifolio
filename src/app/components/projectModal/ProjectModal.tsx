import React, { useEffect, useRef, useState } from 'react';
import styles from './ProjectModal.module.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import Carrossel from '../carrossel/Carrossel';
import Image, { StaticImageData } from 'next/image';
import underConstructionIcon from '../../../../public/genericIcons/inConstructionIcon.webp';


interface ModalTypes {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string,
    titlePath?: string,
    gitHubPath?: string,
    netlifyPath?: string,
    text?:string,
    inConstruction?:boolean,
    photos?: StaticImageData[],
    googleStatusImg?:StaticImageData,
}

function ProjectModal({ setModal, title, titlePath, gitHubPath, netlifyPath,text, inConstruction, photos, googleStatusImg }: ModalTypes) {

    const carousel = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
          }
    },[])

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
                <div className={styles.containerTextWrapper}>
                    <p className={styles.text}>{text}</p>
                    {inConstruction ? 
                    <div className={styles.inConstructionIconWrapper}>
                        <Image src={underConstructionIcon} alt='Site em constução' className={styles.constructionIcon} /> 
                        <p className={styles.underConstructionIconText}>Site em desenvolvimento</p>
                    </div> : googleStatusImg && <Image className={styles.googleStatusImg} src={googleStatusImg} alt='google lighthouse' />}
                </div>  
                {photos && <Carrossel photos={photos} />}
            </div>
        </div>
    )
}

export default ProjectModal