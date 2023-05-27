import React, { useState } from 'react';
import styles from '../styles/Menu.module.css';
import menuPizza from './menu.json';
import Image from 'next/image';

function Menu() {
  const itemsPerPage = 9; // Her sayfada kaç pizza görüntüleneceğini belirlendi
  const totalPages = Math.ceil(menuPizza.pizzas.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Varsayılan olarak tüm kategori
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Kategorilere göre pizzaları filtrelemek için bir fonksiyon
  const filterPizzasByCategory = () => {
    if (selectedCategory === 'all') {
      return menuPizza.pizzas.slice(startIndex, endIndex);
    } else {
      return menuPizza.pizzas.filter((pizza) => pizza.category === selectedCategory).slice(startIndex, endIndex);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setCurrentPage(1); // Kategori değiştikçe sayfayı sıfırla
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Menü List</h2>
      <div className={styles.categories}>
        <button
          className={`${styles.category} ${selectedCategory === 'all' ? styles.focus : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={`${styles.category} ${selectedCategory === 'vegetarian' ? styles.focus : ''}`}
          onClick={() => handleCategoryChange('vegetarian')}
        >
         Vegetarian
        </button>
        <button
          className={`${styles.category} ${selectedCategory === 'meat' ? styles.focus : ''}`}
          onClick={() => handleCategoryChange('meat')}
        >
          Meat
        </button>
        
      </div>
      <div className={styles.cards}>
        {filterPizzasByCategory().map((pizza, id) => (
          <div key={id} className={styles.card}>
            <Image className={styles.pizzaimg} src={pizza.image} width={500} height={200} alt={pizza.name} />
            <h3 className={styles.pizzaname}>{pizza.name}</h3>
            <h4 className={styles.desc}>{pizza.description}</h4>
            <h2 className={styles.price}>$ {pizza.price}</h2>
            <button className={styles.buy}>Buy Now</button>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.page} ${currentPage === index + 1 ? styles.focus : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Menu;
