import React from 'react'
import styles from '../styles/ContactPage.module.css'
import { FaRegPaperPlane } from "react-icons/fa";
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.contact}>
            <div className={styles.left}>
                <Image src='/img/pizzarest.jpeg' className={styles.img} width={500} height={750}></Image>
            </div>
            <div className={styles.right}>                
                    <form className={styles.form}> 
                        <input className={styles.input} type='text' placeholder='Name'></input>
                        <input className={styles.input} type='email' placeholder='E-mail'></input>
                        <input className={styles.input} type='text' placeholder='Subject'></input>
                        <textarea className={styles.input} placeholder='Message'></textarea>
                        <button type='submit' className={styles.btn}>Send Message <FaRegPaperPlane/></button>
                    </form>
              
            </div>
        </div>
    </div>
  )
}

export default ContactPage