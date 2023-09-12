import React, { useEffect, useRef, useState } from 'react';
import styles from './carrossel.module.css';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface CarrosselPropsTypes {
  photos?: StaticImageData[],
}

function Carrossel({ photos }: CarrosselPropsTypes) {

  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, [])

  return (
    <motion.div className={styles.carrosselContainer}
      whileTap={{ cursor: "grabbing" }}
      drag="x"
      ref={carousel}
      dragConstraints={{ right: 300, left: -width }}
      initial={{x:0}}
      animate={{x:200}}
      transition={{duration:0.8}}
    >
      {photos && photos.map((photo, i) => (
        <motion.div key={i} className={styles.item}>
          <Image src={photo} className={styles.photo} alt='img' />
        </motion.div>
      ))}

    </motion.div>
  )
}

export default Carrossel;