import React, { useState } from "react";
import styles from "../styles/Menu.module.css";
import menuPizza from "./menu.json";
import Image from "next/image";
import TopButton from "@/components/TopButton";
//import { useRouter } from 'next/router';
import { FaCheck, FaShoppingBasket } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

function Menu() {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(menuPizza.pizzas.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [msg, setMsg] = useState(false);
  //const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [filteredPizzas, setFilteredPizzas] = useState(menuPizza.pizzas);

  // Kategorilere göre pizzaları filtrelemek için bir fonksiyon
  const filterPizzasByCategory = () => {
    if (selectedCategory === "all") {
      return filteredPizzas.slice(startIndex, endIndex);
    } else {
      return filteredPizzas
        .filter((pizza) => pizza.category === selectedCategory)
        .slice(startIndex, endIndex);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setCurrentPage(1); // Kategori değiştikçe sayfayı sıfırla
    setSelectedCategory(category);
  };

  const addToCart = (pizzaItem) => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.push(pizzaItem);
    localStorage.setItem("cartItems", JSON.stringify(items));
    setCartItems(items); // Update the cartItems state with the updated array
    // router.push('/cart');
    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 4000);
  };

  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue); // Inputtaki değeri güncelle

    // Tüm pizzaları filtrele
    const filteredData = menuPizza.pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(inputValue)
    );
    setFilteredPizzas(filteredData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <h2 className={styles.title}>Menü List</h2>

      <input
        className={styles.searchArea}
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleChange}
      />

      <div className={styles.categories}>
        <button
          className={`${styles.category} ${
            selectedCategory === "all" ? styles.focus : ""
          }`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.category} ${
            selectedCategory === "vegetarian" ? styles.focus : ""
          }`}
          onClick={() => handleCategoryChange("vegetarian")}
        >
          Vegetarian
        </button>
        <button
          className={`${styles.category} ${
            selectedCategory === "meat" ? styles.focus : ""
          }`}
          onClick={() => handleCategoryChange("meat")}
        >
          Meat
        </button>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={styles.cards}
      >
        {filterPizzasByCategory().map((pizza, id) => (
          <motion.div variants={item} key={id} className={styles.card}>
            <div className={styles.imgBx}>
              <Image
                src={pizza.image}
                className={styles.img}
                alt=""
                width="150"
                height="150"
              />
            </div>
            <div className={styles.contentBx}>
              <h2 className={styles.card_title}>{pizza.name}</h2>
              <p className={styles.card_body}>{pizza.description}</p>
              <div className={styles.card_price}>${pizza.price}</div>        
             
                <button className={styles.buy} onClick={() => addToCart(pizza)}>
                  Buy Now
                </button>{" "}
            
            </div>
          </motion.div>
        ))}
      </motion.div>
      {msg && (
        <div className={styles.main}>
          <p className={styles.info}>
            <FaCheck /> Pizza added to cart
          </p>
          <Link href="/cart">
            <button className={styles.btn}>
              <FaShoppingBasket className={styles.icon} />
            </button>
          </Link>
        </div>
      )}

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.page} ${
              currentPage === index + 1 ? styles.focus : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <TopButton/>
    </motion.div>
  );
}

export default Menu;
