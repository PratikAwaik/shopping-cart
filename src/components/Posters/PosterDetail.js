import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "./ItemContext";
import checkmark from "../../images/checkmark.svg";

function PosterDetail(props) {
  const [addClicked, setAddClicked] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const { quantity, setQuantity } = useContext(ItemContext);

  function handleClick(e) {
    const prevQuantity = { ...quantity };

    if (parseInt(inputValue) > 0) {
      if (prevQuantity[props.poster.itemId])
        prevQuantity[props.poster.itemId] += parseInt(inputValue);
      else prevQuantity[props.poster.itemId] = parseInt(inputValue);
      setQuantity(prevQuantity);
      setAddClicked(true);
    } else setAddClicked(false);
  }

  function buyClick() {
    const prevQuantity = { ...quantity };
    if (prevQuantity[props.poster.itemId])
      prevQuantity[props.poster.itemId] += 1;
    else prevQuantity[props.poster.itemId] = 1;
    setQuantity(prevQuantity);
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
    setAddClicked(false);
  }

  return (
    <div className="poster-detail" id={props.poster.itemId}>
      <div className="poster-detail__name">
        <span>{props.poster.itemName}</span>
      </div>
      <div className="poster-detail__img">
        <img src={props.poster.itemImages[0]} alt="Voyager Poster" />
      </div>
      <div className="poster-detail__pricing">
        <div className="poster-detail__price">
          <span>$ {props.poster.itemPrice} USD</span>
        </div>
        <div className="poster-detail__notice-badge">
          <span>Free Shipping</span>
        </div>
      </div>
      <div className="poster-detail__description">
        <span>{props.poster.itemDescription}</span>
      </div>
      <div className="poster-detail__dimensions">
        <span>Dimensions: {props.poster.itemDimensions}</span>
      </div>

      <div className="poster-detail__more">
        <Link to={`/product/${props.poster.itemId}`}>More Photos</Link>
      </div>

      <div className="poster-detail__buy">
        <input
          className="quantity"
          type="number"
          min="1"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="add-to-cart-btn"
          onClick={(e) => handleClick(e)}>
          Add to Cart
        </button>
        <Link to="/cart" className="buy-now-link" onClick={buyClick}>
          Buy Now
        </Link>
      </div>

      {addClicked ? (
        <div className="poster-add-success">
          <img src={checkmark} alt="Checkmark" />
          <span>Poster added to cart</span>
        </div>
      ) : null}
    </div>
  );
}

export default PosterDetail;
