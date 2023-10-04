import React, { useState } from 'react'
import styles from '../styles/Subscribe.module.css'


const Subscribe = () => {
  const [msg, setMsg] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.subscribe}>
        <h1 className={styles.title}>Subscribe To <span className={styles.title2}>Our Newsletter</span></h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel felis malesuada, tincidunt metus ac, lacinia augue. </p>
        <div className={styles.mailForm}>
        <form className={styles.mail}>
          <input type='email' className={styles.input} id='mail' placeholder='Enter your email address'>
          </input>
        <button type="button" className={styles.btn} onClick={() => mail.value ? setMsg("Email address registered") :  setMsg("Email cannot be left blank")}>SUBMIT NOW</button>
        <p className={styles.msg}>{msg}</p>
        </form>
      </div>
      
      </div>
     
    </div>
  )
}

export default Subscribe