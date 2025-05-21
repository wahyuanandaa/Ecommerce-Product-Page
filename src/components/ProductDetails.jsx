import React from "react"

const ProductDetails = ({
  product,
  selectedQuantity,
  decreaseQuantity,
  increaseQuantity,
  addToCart
}) => (
  <>
    <section className="product-details">
      <p className="company-name">SNEAKER COMPANY</p>
      <h2>Fall Limited Edition Sneakers</h2>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-details">
        <div className="product-price">
          <p className="current-price">${product.price.toFixed(2)}</p>
          <span className="discount-tag">{product.discount}</span>
        </div>
        <p className="original-price">${product.originalPrice.toFixed(2)}</p>
      </div>
      <div className="add-to-cart">
        <div className="quantity-selection">
          <button
            className="minus-item-btn"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
          >
            <img src="images/icon-minus.svg" alt="-" />
          </button>
          <p className="item-quantity">{selectedQuantity}</p>
          <button
            className="add-item-btn"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
          >
            <img src="images/icon-plus.svg" alt="+" />
          </button>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={addToCart}
          aria-label="Add item to cart"
        >
          <img src="images/icon-cart.svg" alt="cart" /> Add to cart
        </button>
      </div>
    </section>
  </>
)

export default ProductDetails
