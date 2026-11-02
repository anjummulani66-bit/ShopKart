import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Product = ({ id, title, image, price, category ,rating}) => {

  const {addToCart} = useCart();

 const product = {
    id,
    title,
    image,
    price,
    category,
    rating
 }

  return (
        
    <div className="card h-100 shadow-sm">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-success fw-bold">$ {price}</p>
        <p className="card-text text-muted">{category}</p>
        <p className="card-text text-succes" >Rating:{rating}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
        
      </div>
    </div>
  );
};

export default Product;
