import axios from "axios"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Counter from './counter';
import './productList.css';
import { BsFillCakeFill } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { TbCandy } from "react-icons/tb";
import { LuCroissant } from "react-icons/lu";

function ProductList() {
  
  const [item, setitem] = useState([]);
  useEffect(() => {
    getitem();
  }, []);

  function getitem() {
      axios.get('http://localhost/api/').then(function(response) {
          console.log(response.data);
          setitem(response.data);
      });
  }
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

  return (
    <div className="product-filter">
      <button onClick={() => handleCategorySelect(null)} className="category-button">All</button>
      <button onClick={() => handleCategorySelect(1)} className="category-button">Chocolate</button>
      <button onClick={() => handleCategorySelect(2)} className="category-button">Candy</button>
      <button onClick={() => handleCategorySelect(3)} className="category-button">Pastries</button>
      <button onClick={() => handleCategorySelect(4)} className="category-button">Cake</button>

      <div className="product-container">
          {item.filter(product => selectedCategory === null || product.category_id === selectedCategory)
            .map(product => (
              <div key={product.item_id} className="individual-product-container">
                <div className="icon-container">
                  {product.category_id == 1 && <GiChocolateBar />}
                  {product.category_id == 2 && <TbCandy />}
                  {product.category_id == 3 && <LuCroissant />}
                  {product.category_id == 4 && <BsFillCakeFill />}
                </div>
                <h3>{product.item_name}</h3>
                <Counter 
                    product={product} 
                    onCountChange={onCountChange} 
                />
                <button className="add-to-cart-button">
                  Add to Cart
                </button>

                <div className="price-stock-container">
                    <div className="price-container">
                        <h4>₱{product.item_price}</h4>
                    </div>
                    
                    <div className="stock-container">
                        <h4>{product.item_stock} Pieces Left</h4>
                    </div>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
