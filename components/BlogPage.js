import React from 'react'
import styles from '../styles/BlogPage.module.css'
import Image from 'next/image'
import Blog from './Blog'


const BlogPage = () => {
  return (
    <div className={styles.container}>
         <h1 className={styles.title}> Pizza Blog <Image src='/img/blog.png' className={styles.img} width={80} height={80}></Image> </h1>
     <div className={styles.wrapper}>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
     </div>
    </div>
  )
}

export default BlogPage