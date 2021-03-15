import React, { useContext } from "react";
import { ItemContext } from "../Posters/ItemContext";
import data from "../../data";

function Cart() {
  const { quantity, setQuantity } = useContext(ItemContext);
  let totalPrice = 0;

  for (let poster in quantity) {
    totalPrice += data[poster].itemPrice * quantity[poster];
  }

  function removePoster(id, e) {
    const prevQuantity = { ...quantity };
    delete prevQuantity[id];
    setQuantity(prevQuantity);
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <h1>your order summary</h1>
        <hr />

        {Object.keys(quantity).length > 0 ? (
          <div className="cart__container__posters">
            {Object.keys(quantity).map((poster) => {
              return (
                <div className="cart__poster" key={poster}>
                  <div className="cart__poster-img">
                    <img src={data[poster].itemImages[0]} alt="Poster" />
                  </div>
                  <div className="cart__poster__details">
                    <div className="cart__poster-name-quantity">
                      <span className="cart__poster-name">
                        {data[poster].itemName}
                      </span>
                      <span className="cart__poster-quantity">
                        Quantity: {quantity[poster]}
                      </span>
                      <button
                        className="cart__poster-remove"
                        onClick={(e) => removePoster(poster, e)}>
                        Remove
                      </button>
                    </div>
                    <div className="cart__poster-price">
                      <span>
                        ${" "}
                        {(data[poster].itemPrice * quantity[poster]).toFixed(2)}{" "}
                        USD
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="cart__total">
              <span>Total: </span>
              <span>$ {totalPrice.toFixed(2)} USD</span>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <span>No Posters in the Cart</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
