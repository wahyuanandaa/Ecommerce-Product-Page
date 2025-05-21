import React, { useState, useRef, useEffect } from "react"
import "./index.css"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ProductGallery from "./components/ProductGallery"
import ProductDetails from "./components/ProductDetails"
import Lightbox from "./components/Lightbox"

// Helper data (migrated from script.js)
const product = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  originalPrice: 250.0,
  discount: "50%",
  thumbnail: "images/image-product-1-thumbnail.jpg"
}
const images = [
  {
    full: "images/image-product-1.jpg",
    thumbnail: "images/image-product-1-thumbnail.jpg"
  },
  {
    full: "images/image-product-2.jpg",
    thumbnail: "images/image-product-2-thumbnail.jpg"
  },
  {
    full: "images/image-product-3.jpg",
    thumbnail: "images/image-product-3-thumbnail.jpg"
  },
  {
    full: "images/image-product-4.jpg",
    thumbnail: "images/image-product-4-thumbnail.jpg"
  }
]

function App() {
  const [selectedQuantity, setSelectedQuantity] = useState(0)
  const [cart, setCart] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)
  const mainImageRef = useRef()

  // Quantity handlers
  const decreaseQuantity = () => setSelectedQuantity((q) => Math.max(0, q - 1))
  const increaseQuantity = () => setSelectedQuantity((q) => q + 1)

  // Cart handlers
  const addToCart = () => {
    if (selectedQuantity > 0) {
      setCart((c) => ({
        ...c,
        [product.id]: (c[product.id] || 0) + selectedQuantity
      }))
      setSelectedQuantity(0)
    }
  }
  const removeFromCart = (id) => {
    setCart((c) => {
      const newCart = { ...c }
      delete newCart[id]
      return newCart
    })
  }

  // Sidebar, cart, lightbox handlers
  const handleResize = () => setIsMobileView(window.innerWidth <= 768)
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Render helpers
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <div>
      <Header
        totalItems={totalItems}
        setSidebarOpen={setSidebarOpen}
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        product={product}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
        <ProductGallery
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          isMobileView={isMobileView}
          setLightboxOpen={setLightboxOpen}
          mainImageRef={mainImageRef}
        />
        <ProductDetails
          product={product}
          selectedQuantity={selectedQuantity}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          addToCart={addToCart}
        />
      </main>
      <Lightbox
        lightboxOpen={lightboxOpen}
        isMobileView={isMobileView}
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        setLightboxOpen={setLightboxOpen}
      />
    </div>
  )
}

export default App
