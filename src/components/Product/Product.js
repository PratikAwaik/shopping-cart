import React from "react";
import data from "../../data";
import ErrorPage from "../ErrorPage";

function Product({ match }) {
  if (data[match.params.id]) {
    return (
      <div className="product">
        <div className="product-container">
          <div className="product-info">
            <div className="product-info-details">
              <div className="product-name">
                <span>{data[match.params.id].itemName}</span>
              </div>
              <div className="product-price">
                <span>$ {data[match.params.id].itemPrice} USD</span>
              </div>
              <div className="product-notice-badge">
                <span>Free Shipping</span>
              </div>
              <div className="product-description">
                <span>{data[match.params.id].itemDescription}</span>
              </div>
              <div className="product-dimensions">
                <span>Dimensions: {data[match.params.id].itemDimensions}</span>
              </div>
            </div>
          </div>

          <div className="product-photos">
            <div className="product-photo-item">
              <img
                src={data[match.params.id].itemImages[0]}
                alt="Voyager Poster Photos"
              />
            </div>

            <div className="product-photo-item">
              <img
                src={data[match.params.id].itemImages[1]}
                alt="Voyager Poster Photos"
              />
            </div>

            <div className="product-photo-item">
              <img
                src={data[match.params.id].itemImages[2]}
                alt="Voyager Poster Photos"
              />
            </div>

            <div className="product-photo-item">
              <img
                src={data[match.params.id].itemImages[3]}
                alt="Voyager Poster Photos"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}

export default Product;
