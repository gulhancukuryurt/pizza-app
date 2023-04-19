import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";


const PizzaCard = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.card}>
     <div className={styles.imgBx}>
      <Image src="/img/pizzalist1.png" className={styles.img} alt=""  width ="150" height="150"/>
     </div>
     <div className={styles.contentBx}>
     <h2 className={styles.card_title}>FIORI DI ZUCCA</h2>
     <p className={styles.card_body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
     <div className={styles.card_price}>$19.90</div>        
     </div>
    
     <button className={styles.button} href="#">Buy Now</button>
     </div>
      </div>
  )
}

export default PizzaCard