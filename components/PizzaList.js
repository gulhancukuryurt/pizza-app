import React from 'react'
import PizzaCard from './PizzaCard'
import styles from '../styles/PizzaList.module.css'
//import Image from 'next/image'

const ProductList = () => {
  return (
    <div className={styles.container}>
         <h1 className={styles.title}>The <span>Best Pizza</span> In Town</h1>
         <p className={styles.desc}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Curabitur vulputate massa at mi sollicitudin laoreet. 
         Praesent egestas varius ultrices. 
         Nulla interdum blandit odio hendrerit ultrices. 
         Suspendisse pellentesque viverra enim, ut laoreet dui mollis ut. 
         </p>
         <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
         
         </div>
    </div>
  )
}

export default ProductList