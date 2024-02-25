import React, { useState } from 'react';
import Counter from './counter';
import './productList.css';
import { BsFillCakeFill } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { TbCandy } from "react-icons/tb";
import { LuCroissant } from "react-icons/lu";

function ProductList() {
  const [productCounts, setProductCounts] = useState({});

  const onCountChange = (productId, newCount) => {
    setProductCounts(prevCounts => ({
      ...prevCounts,
      [productId]: newCount,
    }));
  };

  
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const products = [
    { id: 1, category: 1, name: 'Product 1', price: 7.5, stock: 10, initialCount: 0 },
    { id: 2, category: 1, name: 'Product 2', price: 7.5, stock: 10, initialCount: 0 },
    { id: 3, category: 2, name: 'Product 3', price: 7.5, stock: 10, initialCount: 0 },
    { id: 4, category: 2, name: 'Product 4', price: 7.5, stock: 10, initialCount: 0 },
    { id: 5, category: 3, name: 'Product 5', price: 7.5, stock: 10, initialCount: 0 },
    { id: 6, category: 3, name: 'Product 6', price: 7.5, stock: 10, initialCount: 0 },
    { id: 7, category: 4, name: 'Product 7', price: 7.5, stock: 10, initialCount: 0 },
    { id: 8, category: 4, name: 'Product 8', price: 7.5, stock: 10, initialCount: 0 },
  ]; /* THESE ARE TEMPORARY HARDCODED PRODUCT VALUES SINCE BACKEND NEEDS TO BE CODED */

  return (
    <div className="product-filter">
      <button onClick={() => handleCategorySelect(null)} className="category-button">All</button>
      <button onClick={() => handleCategorySelect(1)} className="category-button">Chocolate</button>
      <button onClick={() => handleCategorySelect(2)} className="category-button">Candy</button>
      <button onClick={() => handleCategorySelect(3)} className="category-button">Pastries</button>
      <button onClick={() => handleCategorySelect(4)} className="category-button">Cake</button>

      <div className="product-container">
          {products.filter(product => selectedCategory === null || product.category === selectedCategory)
            .map(product => (
              <div key={product.id} className="individual-product-container">
                <div className="icon-container">
                  {product.category == 1 && <GiChocolateBar />}
                  {product.category == 2 && <TbCandy />}
                  {product.category == 3 && <LuCroissant />}
                  {product.category == 4 && <BsFillCakeFill />}
                </div>
                <h3>{product.name}</h3>
                <Counter 
                    product={product} 
                    onCountChange={onCountChange} 
                />
                <button className="add-to-cart-button">
                  Add to Cart
                </button>

                <div className="price-stock-container">
                    <div className="price-container">
                        <h4>₱{product.price}</h4>
                    </div>
                    
                    <div className="stock-container">
                        <h4>{product.stock} Pieces Left</h4>
                    </div>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
