import React from 'react'
import styles from '../styles/Blog.module.css'
import Image from 'next/image'


const Blog = () => {
    return (
        <div className={styles.container}>
        
            <div className={styles.card}>
                <div className={styles.card1}>
                    <div className={styles.card_img}>
                        <Image src="/img/pizza.webp" width={280} height={280}></Image>
                    </div>
                    <a href='' className={styles.card_link}>
                        <div className={styles.card_img_hovered}></div>
                    </a>
                    <div className={styles.card_info}>
                        <div className={styles.card_about}>
                            <a className={styles.card_tag}>PIZZA NEWS</a>
                            <div className={styles.card_time}>06/04/2023</div>
                        </div>
                        <h1 className={styles.card_title}>Pizza Blog </h1>
                        <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <div className={styles.card_creator}>
                            <Image src='/img/chef.png' className={styles.chef} width={50} height={50}></Image> <a href='' className={styles.pizzacreate}> by Pizza Chef</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog