import React, { useState } from 'react'
import styles from '../styles/ContactPage.module.css'
import { FaRegPaperPlane } from "react-icons/fa";
import Image from 'next/image'

const ContactPage = () => {
  const [msg, setMsg] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.left}>
          <Image src='/img/pizzarest.jpeg' className={styles.img} width={500} height={750}></Image>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <input className={styles.input} type='text' placeholder='Name'></input>
            <input className={styles.input} id="email" type='email' placeholder='E-mail'></input>
            <input className={styles.input} type='text' placeholder='Subject'></input>
            <textarea className={styles.input} id='msg' placeholder='Message'></textarea>
            <button type='button' className={styles.btn} onClick={() => {
              if (email === "" || msg === "") {
                setMsg("Kontrol Ediniz");
              } else {
                setMsg("Mesaj gönderildi");
              }
            }}>
              Send Message <FaRegPaperPlane />
            </button>                        <p className={styles.msg}>{msg}</p>

          </form>


        </div>
      </div>
    </div>
  )
}

export default ContactPage