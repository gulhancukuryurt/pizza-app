import React from 'react'
import styles from '../orders/Order.module.css'
import Image from 'next/image'
import { FaCheckCircle } from "react-icons/fa";


const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if(index - status <1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
           <div className={styles.row}>
             <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
           
            <td>
              <span className={styles.id}>12234355</span>
            </td>
            <td>
              <span className={styles.customer}>Lorem Ipsum</span>
            </td>
            <td>
              <span className={styles.address}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
          </table>
           </div>
           <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image src="/img/paid3.png" width={90} height={90}></Image>
                <div className={styles.checkIcon}>
                <span className={styles.paid}>Payment</span>
                <Image src="/img/check.png" width={30} height={30}></Image>
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image src="/img/icon2.png" width={90} height={90}></Image>
                <div className={styles.checkIcon}>
                <span className={styles.paid}>Preparing</span>
                <Image src="/img/check.png" className={styles.iconcheck} width={30} height={30}></Image>
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image src="/img/delivery.png" width={90} height={90}></Image>
                <div className={styles.checkIcon}>
                <span className={styles.paid}>On The Way</span>
                <Image src="/img/check.png" className={styles.iconcheck} width={30} height={30}></Image>
                </div>
            </div>
            <div className={statusClass(3)}>
                <Image src="/img/icon3.png" width={90} height={90}></Image>
                <div className={styles.checkIcon}>
                <span className={styles.paid}>Delivered</span>
                <Image src="/img/check.png"className={styles.iconcheck} width={30} height={30}></Image>
                </div>
            </div>
           </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal: </b>$39.80
          </div>
          <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount: </b>$0.00
          </div>
          <div className={styles.totalText}>
          <b className={styles.totalTextTitleTotal}>Total: $39.80 </b>
          <hr></hr>
          </div>
          <button disabled className={styles.button}>PAID <FaCheckCircle/></button>
         </div>
        </div>
    </div>
  )
}

export default Order