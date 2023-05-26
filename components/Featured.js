import React, { useState } from 'react';
import styles from '../styles/Featured.module.css';
import { FaPizzaSlice } from 'react-icons/fa';
import Image from 'next/image';

const Featured = () => {
  const [index1, setIndex1] = useState(0);
  


  const images1 = [
    '/img/pizza1.jpg',
    '/img/pizza3.jpg',
    '/img/pizza4.jpg',
    '/img/pizza6.webp',
  ];

  const handleArrow = (direction) => {
    if (direction === '1') {
      if (index1 !== 0) setIndex1(index1 - 1);
      else setIndex1(images1.length - 1);
    } else if (direction === 'r') {
      if (index1 !== images1.length - 1) setIndex1(index1 + 1);
      else setIndex1(0);
    }
  };

  console.log(index1);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0, transform: 'rotate(35deg)', margin: 10 }}
        onClick={() => handleArrow('1')}
      >
        <FaPizzaSlice fontSize="3rem" color="#f26d25" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src={images1[index1]} width="1900" height="700" />
        </div>
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0, transform: 'rotate(220deg)', margin: 10 }}
        onClick={() => handleArrow('r')}
      >
        <FaPizzaSlice fontSize="3rem" color="#f26d25" />
      </div>
    </div>
  );
};

export default Featured;
