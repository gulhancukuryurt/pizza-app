import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
import pizza1 from "../img/gallery1.jpg";
import pizza2 from "../img/gallery2.jpg";
import pizza3 from "../img/gallery3.jpg";
import pizza4 from "../img/gallery4.jpg";
import pizza5 from "../img/gallery5.jpg";
import pizza6 from "../img/gallery6.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Link from 'next/link';
import { FaPizzaSlice } from "react-icons/fa";


function Slider() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const card = [
    {
      image: pizza1,
      title: "Pizza Menu 1",
    },
    {
      image: pizza2,
      title: "Pizza Menu 2",
    },
    {
      image: pizza3,
      title: "Pizza Menu 3",
    },
    {
      image: pizza4,
      title: "Pizza Menu 4",
    },
    {
      image: pizza5,
      title: "Pizza Menu 5",
    },
    {
      image: pizza6,
      title: "Pizza Menu 6",
    },
  ];

  const visibleCards = [
    card[currentCardIndex],
    card[currentCardIndex + 1],
    card[currentCardIndex + 2],
   
  ];

  const showPreviousCards = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const showNextCards = () => {
    if (currentCardIndex < card.length - 3) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
  <div className={styles.cardMain}>
    <div className={styles.menu}>
    <h1 className={styles.title}>The tasties pizza in town</h1>
    <Link href="/menu">
    <button className={styles.menubtn}>Our Menu <FaPizzaSlice className={styles.iconp}/></button>

    </Link>
    </div>
    
    <div className={styles.cardslider}>
      <button className={styles.btn} onClick={showPreviousCards}>
        <FaAngleLeft className={styles.icon}/>
      </button>
      <div className={styles.cardContainer}>
        {visibleCards.map((pizza, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <Image
                className={styles.cardimg}
                src={pizza.image}
                alt="image"
                width={200}
                height={200}
              />
            </div>

            <h2>{pizza.title}</h2>
          </div>
        ))}
      </div>

      <button className={styles.btn} onClick={showNextCards}>
        <FaAngleRight className={styles.icon}/>
      </button>
    </div>
    </div>
  );
}

export default Slider;
