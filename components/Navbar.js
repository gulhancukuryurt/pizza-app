import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { FaUserAlt, FaShoppingBasket, FaBars, FaUserPlus, FaPizzaSlice, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItemCount(storedItems.length);

    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') {
        const updatedItems = JSON.parse(event.newValue) || [];
        setItemCount(updatedItems.length);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/img/logo.png" width="90" height="70" />
          </Link>
        </div>
      </div>
      <div className={`${styles.item} ${styles.menuIcon}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`${styles.item} ${styles.menuItems} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <FaPizzaSlice /> Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/menu">
              <FaPizzaSlice /> Menu
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/blog">
              <FaPizzaSlice /> Blog
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact">
              <FaPizzaSlice /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactmsg}>ORDER NOW</div>
        <div className={styles.number}>
          <FaPhoneAlt fontSize={"15px"} /> 444 55 66
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.userarea}>
          <Link href="/login">
            <div className={styles.login}>
              <FaUserAlt />
            </div>
          </Link>
          <Link href="/cart">
          <div className={styles.cart}>
            <FaShoppingBasket />
            {itemCount > 0 && <div className={styles.counter}>{itemCount}</div>}
          </div>
          </Link>
          
          <Link href="/sign">
            <div className={styles.signin}>
              <FaUserPlus />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
