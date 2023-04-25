import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import ContactPage from './ContactPage'


const Contact = () => {
  return (
    <div className={styles.container}>
         <h1 className={styles.title}> Contact Us <Image src='/img/send1.png' className={styles.img} width={50} height={50}></Image>  </h1>
     <div className={styles.wrapper}>
        <ContactPage/>
     </div>
    </div>
  )
}

export default Contact