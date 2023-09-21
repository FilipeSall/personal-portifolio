import React from 'react';
import styles from './Footer.module.css';
import { AiOutlineWhatsApp, AiFillPhone } from "react-icons/ai";

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.contactWrapper}>
                <h1 className={styles.footerTitle}>Contato</h1>
                <a href='/https://wa.me/5561998272992' target='__blank' className={styles.footerIcon} > <AiOutlineWhatsApp size={38} alt='Link para uma conversa direta pro whats app' fill='#25D366' />
                </a>
                <a href='tel:+5561998272992' target='___blank'> <AiFillPhone alt='fazer ligação diretamente' className={styles.footerIcon} fill='#EDF5FC' size={38} /> </a>
            </div>
            <div className={styles.infoTextWrapper}>
                    <p>(61)99827-2992</p>
                    <p>Filipesallesdev@gmail.com</p>
                </div>  
        </footer>
    )
}

export default Footer