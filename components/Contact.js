import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import { FaChevronRight } from "react-icons/fa";



const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.company}>
      <h1 className={styles.main}>LOOKİNG TO FEED A GROUP</h1>
      <h2 className={styles.mainp}>WE HAVE YOU COVERED</h2>
      <button className={styles.btn}>LEARN MORE <FaChevronRight className={styles.icon}/></button>
      </div>
    </div>
  )
}

export default Contact