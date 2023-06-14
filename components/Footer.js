import React from 'react'
import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import {FaPizzaSlice,FaCaretRight,FaPhoneAlt,FaInstagram,FaYoutube,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        
        <ul>
          <Link href="/">
          <li><FaPizzaSlice color='#f8bd11'/> Home</li>
          </Link>
          <Link href="/menu">
          <li><FaPizzaSlice color='#f8bd11'/> Menu</li>
          </Link>
          <Link href="/blog">
          <li><FaPizzaSlice color='#f8bd11'/> Blog</li>
          </Link>
          <Link href="/contact">
          <li><FaPizzaSlice color='#f8bd11'/> Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.menudetails}>
        <h2 className={styles.titleMenu}>MENU</h2>
          <li><FaCaretRight style={styles.icon1}/> Pizzas</li>
          <li><FaCaretRight style={styles.icon1}/> Pizzas</li>
          <li><FaCaretRight style={styles.icon1}/> Pizzas</li>
          <li><FaCaretRight style={styles.icon1}/> Pizzas</li>
      </div>
      <div className={styles.brands}>
        <h2 className={styles.title}> BRANDS</h2>
        <p className={styles.brand}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className={styles.brand}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className={styles.brand}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.social}>
        <div className={styles.contact}>
      <div className={styles.contactmsg}>
            ORDER NOW
          </div>
             <div className={styles.number}>
              <FaPhoneAlt fontSize={"15px"}/> 444 55 66
             </div>
             </div>
             <div className={styles.socialmedia}>
               <h2><FaInstagram  className={styles.icon}/></h2>
               <h2><FaYoutube className={styles.icon}/></h2>
               <h2><FaFacebook className={styles.icon}/></h2>
             </div>
      </div>
    </div>
  )
}

export default Footer