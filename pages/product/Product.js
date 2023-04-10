import React, { useState } from 'react'
import styles from '../product/Product.module.css'
import Image from 'next/image'

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza4.jpg",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu scelerisque magna. Fusce at augue vel eros porttitor vestibulum. In diam ante, tempor ac nisi non, cursus tincidunt tortor."
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} width='600' height='600' />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose The Size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/icon4.png" alt='' width="50" height="50"/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size}onClick={()=>setSize(1)}>
                        <Image src="/img/icon4.png" alt='' width="60" height="60"/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/icon4.png" alt='' width="70" height="70"/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <div className={styles.chooseadd}>
                    <h3 className={styles.titleadd}>Choose Additional Ingredients</h3>
                    <div className={styles.extra}>
                      <div className={styles.option}>
                        <input 
                        type="checkbox"
                        id="double"
                        name="double"
                        className={styles.checkbox}/>
                        <label htmlFor="double">Double Ingredients</label>
                      </div>
                      <div className={styles.option}>
                        <input 
                        type="checkbox"
                        id="cheese"
                        name="cheese"
                        className={styles.checkbox}/>
                        <label htmlFor="cheese">Extra Cheese</label>
                      </div>
                      <div className={styles.option}>
                        <input 
                        type="checkbox"
                        id="spicy"
                        name="spicy"
                        className={styles.checkbox}/>
                        <label htmlFor="spicy">Spicy Sauce</label>
                      </div>
                      <div className={styles.option}>
                        <input 
                        type="checkbox"
                        id="garlic"
                        name="garlic"
                        className={styles.checkbox}/>
                        <label htmlFor="garlic">Garlic Sauce</label>
                      </div>
                     </div>
                </div>
                <div className={styles.addtocart}>
                    <input type="number" defaultValue={1} className={styles.numberadd}/>
                    <button className={styles.button}>Add To Cart</button>
                 
                </div>
            </div>
        </div>
    )
}

export default Product