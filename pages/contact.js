import React from 'react'
import styles from '../styles/ContactP.module.css'
import { FaRegPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion"

function contact() {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.left}>
                    <div className={styles.address}>
                        <div className={styles.main}>

                            <div className={styles.iconContainer}>
                                <FaMapMarkerAlt style={{ fontSize: "1.3rem" }} />
                                <label>Address</label>
                            </div>
                            <div className={styles.iconContainer}>
                                <FaPhoneAlt style={{ fontSize: "1.3rem" }} />
                                <label>444 55 66</label>
                            </div>
                            <div className={styles.iconContainer}>
                                <FaRegEnvelope style={{ fontSize: "1.3rem" }} />
                                <label>info@pizza.com</label>
                            </div>
                            <hr></hr>
                            <div className={styles.socialmedia}>
                                <h2><FaInstagram className={styles.icon} /></h2>
                                <h2><FaYoutube className={styles.icon} /></h2>
                                <h2><FaFacebook className={styles.icon} /></h2>
                            </div>
                        </div>




                    </div>
                </div>
                <div className={styles.right}>
                    <form className={styles.form}>
                        <input className={styles.input} type='text' placeholder='Name'></input>
                        <input className={styles.input} type='email' placeholder='E-mail'></input>
                        <input className={styles.input} type='text' placeholder='Subject'></input>
                        <textarea className={styles.input} placeholder='Message'></textarea>
                        <button type='submit' className={styles.btn}>Send Message <FaRegPaperPlane /></button>
                    </form>

                </div>
            </div>
        </motion.div>
    )
}

export default contact