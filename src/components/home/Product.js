import React from "react";
import "../../styles/Product.css";
import * as utils from "../../logic/utils";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";

function Product({ id, image, title, price, rating }) {
  const dispatch = useDispatch(); 

  const handleAddClick = () => {
    dispatch(addItem({
      id,
      title,
      image,
      price,
      rating,
    }));
  };

  return (
    <div className="product">
      <div className="product__img-container">
        <img className="product__img" src={image} alt={title} width={256} height={256} />
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {utils.renderRating(rating * 2).map((val, index) => (
            <Star key={index} text={val} />
          ))}
        </div>
        <p className="product__price">
          <span>$</span>
          <span>{utils.getPrice(price)}</span>
          <span>{utils.getPrice(price, "decimal")}</span>
        </p>
      </div>
      <button type="button" onClick={handleAddClick} aria-label={`${title} - Add to cart`}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
