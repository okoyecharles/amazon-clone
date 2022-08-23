import React from "react";
import "../styles/Product.css";
import * as utils from "../logic/utils";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

function Product({ id, image, title, price, rating }) {
  const dispatch = useDispatch(); 

  const handleAddClick = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
    };
    dispatch(addToCart(item));
  };

  return (
    <div className="product">
      <div className="product__img">
        <img src={image} alt=''/>
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
      <button type="button" onClick={handleAddClick}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
