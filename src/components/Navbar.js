import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartLogo from "../images/cart.svg";
import { ItemContext } from "./Posters/ItemContext";

function Navbar(props) {
  const { quantity } = useContext(ItemContext);
  const totalQuantity = Object.values(quantity).reduce((a, b) => a + b, 0);

  return (
    <div className="nav-container">
      <div className="nav">
        <Link to="/">
          <span className="nav__title">space posters</span>
        </Link>
        <div className="nav__links">
          <div>
            <Link to="/">home</Link>
          </div>

          <div>
            <Link to="/posters">posters</Link>
          </div>

          <div>
            <Link to="/contact">contact</Link>
          </div>

          <Link to="/cart">
            <div className="nav__links__cart">
              <img
                className="nav__links__cart__img"
                src={cartLogo}
                alt="Shopping Cart"
              />
              <span className="nav__links__cart__quantity">
                {totalQuantity}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
