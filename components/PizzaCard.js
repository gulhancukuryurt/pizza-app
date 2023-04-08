import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa";


const PizzaCard = () => {
  return (
    
    <div className={styles.container}>
     <div className={styles.pizzaimg}>
      <Image src="/img/pizzalist1.png" alt=""  width ="150" height="150"/>
     </div>
     <h2 className={styles.title}>FIORI DI ZUCCA</h2>
     <span className={styles.price}>$19.90</span>
     <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
          <button className={styles.pricebtn}>BUY NOW <FaShoppingCart className={styles.icon}/></button>
        
      </div>
     
     

  )
}

export default PizzaCard