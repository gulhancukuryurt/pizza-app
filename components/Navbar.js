import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { FaUserAlt, FaShoppingBasket, FaBars, FaUserPlus, FaPizzaSlice, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/img/logo.png" width="90" height="70" />
        </div>
      </div>
      <div className={`${styles.item} ${styles.menuIcon}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`${styles.item} ${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          <li className={styles.listItem}><FaPizzaSlice /> Home</li>
          <li className={styles.listItem}><FaPizzaSlice /> Menu</li>
          <li className={styles.listItem}><FaPizzaSlice /> Blog</li>
          <li className={styles.listItem}><FaPizzaSlice /> Contact</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactmsg}>
          ORDER NOW
        </div>
        <div className={styles.number}>
          <FaPhoneAlt fontSize={"15px"} /> 444 55 66
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.userarea}>
          <div className={styles.login}>
            <FaUserAlt />
          </div>
          <div className={styles.cart}>
            <FaShoppingBasket />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.signin}>
            <FaUserPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
