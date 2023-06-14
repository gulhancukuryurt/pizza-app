import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Cart.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
  const router = useRouter();
  const { cartItems } = router.query;
  const parsedCartItems = JSON.parse(cartItems || '[]');

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setItems(storedItems);
  }, []);

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.price,0);
  };

  const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    return subtotal;
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...items];
    updatedCartItems.splice(index, 1);
    setItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  
  

  return (
    <div className={styles.container}>
      <div className={styles.table1}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.image}>
                    <Image src={item.image} alt={item.name} width="150" height="150" />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{item.name}</span>
                </td>
               
                <td>
                  <span className={styles.price}>${item.price}</span>
                </td>
               
                <td>
                  <span className={styles.total}>${item.price}</span>
                </td>
                <td>
      <button style={{padding:"10px", backgroundColor:"#f26d25", border:"none", cursor:"pointer"}} onClick={() => removeFromCart(index)}><FontAwesomeIcon style={{fontSize:"1.2rem"}} icon={faTrash} /></button>
    </td>              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          
          <div className={styles.totalText}>
            <b className={styles.totalTextTitleTotal}>Total: ${calculateTotal(items)} </b>
            <hr />
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
