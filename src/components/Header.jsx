import React from "react"

const Header1 = ({
  totalItems,
  setSidebarOpen,
  setCartOpen,
  cartOpen,
  product,
  cart,
  removeFromCart
}) => {
  return (
    <>
      <header>
        <div className="header-left-side">
          <button
            className="menu-open-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <img src="/images/icon-menu.svg" alt="menu" />
          </button>
          <div className="logo-img-container">
            <img src="/images/logo.svg" alt="sneakers e-commerce logo" />
          </div>
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right-side">
          <button
            className="shopping-cart-btn"
            onClick={() => setCartOpen((v) => !v)}
            aria-label="Cart"
          >
            <img src="/images/icon-cart.svg" alt="Shopping cart icon" />
            {totalItems > 0 && (
              <span className="cart-item-count">{totalItems}</span>
            )}
          </button>
          <div className="user-avatar-container">
            <img src="/images/image-avatar.png" alt="User avatar" />
          </div>
          {cartOpen && (
            <div className="cart-dropdown">
              <div className="cart-header">Cart</div>
              <div className="cart-content">
                {totalItems === 0 ? (
                  <p className="empty-cart-message">Your cart is empty.</p>
                ) : (
                  <>
                    <div className="cart-item">
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="cart-item-thumbnail"
                      />
                      <div className="cart-item-details">
                        <p className="cart-item-name">{product.name}</p>
                        <p className="cart-item-price">
                          ${product.price.toFixed(2)} x{" "}
                          <span className="cart-item-quantity">
                            {cart[product.id]}
                          </span>{" "}
                          <span className="cart-item-total">
                            ${(product.price * cart[product.id]).toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <button
                        className="delete-item-btn"
                        onClick={() => removeFromCart(product.id)}
                        aria-label="Remove item from cart"
                      >
                        <img src="/images/icon-delete.svg" alt="delete" />
                      </button>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header1
