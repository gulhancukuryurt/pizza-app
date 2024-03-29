import React from 'react'
import styles from '../styles/Blog.module.css'
import Image from 'next/image'
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link'


const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div className={styles.card_img}>
                        <Image src="/img/pizza.webp" alt='pizza1' className={styles.img} width={290} height={340}></Image>
                    </div>
                    <a href='' className={styles.card_link}></a>
                </div>
                <div className={styles.right}>
                    <div className={styles.card_info}>
                    <h1 className={styles.card_title}>How To Make Delicious Pizza? </h1>
                        <div className={styles.card_about}>
                        <a className={styles.card_tag}>PIZZA NEWS</a>
                        <div className={styles.card_time}>06/04/2023</div>
                        </div>
                        <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate massa at mi sollicitudin laoreet.  </p>
                       
                        <div className={styles.card_creator}>
                            <Image src='/img/chef.png' alt='pizza2' className={styles.chef} width={50} height={50}></Image> <a href='' className={styles.pizzacreate}> by Pizza Chef</a>
                            <Link href="/blog">
                            <button className={styles.btn}>Read<FaChevronRight/></button>
                            </Link>
                            </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog