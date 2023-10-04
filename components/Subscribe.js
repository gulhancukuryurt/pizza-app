import React, { useState } from 'react'
import styles from '../styles/Subscribe.module.css'
import Image from 'next/image';
import gallery1 from '../img/gallery1.jpg'
import gallery2 from '../img/gallery2.jpg'
import gallery3 from '../img/gallery3.jpg'
import gallery4 from '../img/gallery4.jpg'
import gallery5 from '../img/gallery5.jpg'
import gallery6 from '../img/gallery6.jpg'
import Link from 'next/link';



const Subscribe = () => {
  const [msg, setMsg] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.contactMain}>
        <div className={styles.info}>
        <h1 className={styles.main}>CONTACT US</h1>
        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl dolor, viverra sit amet lectus quis, fermentum posuere ipsum. Proin maximus massa ac sodales molestie.</p>
       
       <Link href="/contact">
       <button className={styles.btn}>CONTACT</button>
       </Link> 
        </div>
        
        <div className={styles.galleryMain}>
        <figure className={styles.gallery5}>
          <Image src={gallery5} alt='gallery1' width={200} height={420}></Image>
          </figure>
          <div className={styles.gallery}>
          <figure className={styles.gallery1}>
          <Image src={gallery1} alt='gallery1' width={200} height={200}></Image>
          </figure>
          <figure className={styles.gallery2}>
          <Image src={gallery2} alt='gallery2' width={200} height={200}></Image>
          </figure>
          <figure className={styles.gallery3}>
          <Image src={gallery3} alt='gallery3' width={200} height={200}></Image>
          </figure>
          <figure className={styles.gallery4}>
          <Image src={gallery4} alt='gallery4' width={200} height={200}></Image>
          </figure>

        </div>
        <figure className={styles.gallery6}>
          <Image src={gallery6} alt='gallery1' width={250} height={420}></Image>
          </figure>
        </div>
      </div>
     
    </div>
  )
}

export default Subscribe