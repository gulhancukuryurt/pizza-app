import { useState, useEffect } from 'react';
import styles from '../styles/TopButton.module.css';
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
    if(window.pageYOffset > 300) {
        setIsVisible(true);
    }
    else {
        setIsVisible(false);
    }
   };

   const scrollToTop = () => {
    window, scrollTo ({top: 0, behavior: 'smooth'})
   };

   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
   }, []);

   if(!isVisible) {
    return null;
   }

   return (
    <button className={styles.scrollToTopButton} onClick={scrollToTop}>
        <FaArrowUp/>
    </button>
   );


};

export default ScrollToTopButton;
