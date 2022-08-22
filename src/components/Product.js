import React from "react";
import "../styles/Product.css";
import * as utils from '../logic/utils';
import Star from "./Star";

function Product({ image, title, price, rating }) {
  return (
    <div className="product">
      <div className="product__img">
        <img src={image} />
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">{utils.renderRating(rating * 2).map(val => <Star text={val}/>)}</div>
        <p className="product__price">
          <span>$</span>
          <span>{utils.getPrice(price)}</span>
          <span>{utils.getPrice(price, 'decimal')}</span>
        </p>
      </div>
      <button type="button">Add to cart</button>
    </div>
  );
}

export default Product;
