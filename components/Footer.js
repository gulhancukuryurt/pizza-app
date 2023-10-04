import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  FaPizzaSlice,
  FaCaretRight,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";


const Footer = () => {
  const [msg, setMsg] = useState("");

  return (
    <div className={styles.container}>
     
      <div className={styles.menu}>
        <ul>
          <Link href="/">
            <li>
              <FaPizzaSlice className={styles.icon} color="#f8bd11" /> Home
            </li>
          </Link>
          <Link href="/menu">
            <li>
              <FaPizzaSlice className={styles.icon} color="#f8bd11" /> Menu
            </li>
          </Link>
          <Link href="/blog">
            <li>
              <FaPizzaSlice className={styles.icon} color="#f8bd11" /> Blog
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <FaPizzaSlice className={styles.icon} color="#f8bd11" /> Contact
            </li>
          </Link>
        </ul>
      </div>

      <div className={styles.mailForm}>
        <h2 className={styles.title}> JOIN OUR NEWSLETTER</h2>
        <form className={styles.mail}>
          <input
            type="email"
            className={styles.input}
            id="mail"
            placeholder="Enter your email address"
          ></input>
          <button
            type="button"
            className={styles.sbmtbtn}
            onClick={() =>
              mail.value
                ? setMsg("Email address registered")
                : setMsg("Email cannot be left blank")
            }
          >
            SUBMIT NOW
          </button>
          <p className={styles.msg}>{msg}</p>
        </form>
      </div>
      <div className={styles.menudetails}>
        <h2 className={styles.titleMenu}>WORKING HOURS</h2>
       <p className={styles.hours}>10:00 AM - 10:00 PM</p>
       <div className={styles.number}>
          <FaPhoneAlt fontSize={"15px"} /> 444 55 66
        </div>
      </div>

    </div>
  );
};

export default Footer;
