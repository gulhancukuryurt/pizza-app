import React from 'react'
import styles from '../styles/BlogMenuPage.module.css';
import Image from 'next/image';

function Blog() {
  return (
   <div className={styles.container}>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400}/>
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>NASA Has Found Hundreds Of Potential New Planets</h2>
        <p className={styles.card_snippet}>NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <img src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400}/>
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>This Is Your Body And Brain On Coffee</h2>
        <p className={styles.card_snippet}>Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <img src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img}width={300} height={400} />
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>Why You Should Bring Your Dog To Work</h2>
        <p className={styles.card_snippet}>On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <Image src="/img/pizzarest1.jpg" alt="Picture by Kyle Cottrell" className={styles.card_img} width={300} height={400}/>
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>NASA Has Found Hundreds Of Potential New Planets</h2>
        <p className={styles.card_snippet}>NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <img src="/img/pizzarest2.webp" alt="Picture by Nathan Dumlao" className={styles.card_img} width={300} height={400}/>
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>This Is Your Body And Brain On Coffee</h2>
        <p className={styles.card_snippet}>Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
  <div className={styles.card}>
    <figure className={styles.card_thumb}>
      <img src="/img/pizzarest.jpeg" alt="Picture by Daniel Lincoln" className={styles.card_img}width={300} height={400} />
      <figcaption className={styles.card_caption}>
        <h2 className={styles.card_title}>Why You Should Bring Your Dog To Work</h2>
        <p className={styles.card_snippet}>On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
        <a href className={styles.card_button}>Read more</a>
      </figcaption>
    </figure>
  </div>
</div>

  )
}

export default Blog