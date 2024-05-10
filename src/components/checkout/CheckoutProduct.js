import React from "react";
import "../../styles/CheckoutProduct.css";
import * as utils from "../../logic/utils";
import { useDispatch } from "react-redux";
import Star from "../home/Star";
import { removeItem } from "../../redux/features/cart/cartSlice";
import socials from "../../data/socials";

function CheckoutProduct({ index, image, title, price, rating }) {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(index));
  }

  return (
    <div className="checkout__product">
      <div className="checkout__productImg">
        <img src={image} alt={title} width={256} height={256} />
      </div>

      <div className="checkout__productInfo">
        <div className="checkout__productTitlePrice">
          <div className="checkout__productTitle">{title}</div>
          <div className="checkout__productPrice">${price}</div>
        </div>

        <div className="checkout__productGift">
          <input type="checkbox" name="gift" />
          <span>This is a gift</span>
          <a href={socials.github} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>

        <div className="checkout__productRating">
          {utils.renderRating(rating * 2).map((val, index) => (
            <Star key={index} text={val} />
          ))}
        </div>

        <div className="checkout__productButtons">
          <button type="button" onClick={handleRemoveItem}>Delete</button>
          <button type="button">Save for later</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
