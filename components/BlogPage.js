import React from 'react'
import styles from '../styles/BlogPage.module.css'
import Blog from './Blog'


const BlogPage = () => {
  return (
    <div className={styles.container}>
         <h1 className={styles.title}> BLOG </h1>
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