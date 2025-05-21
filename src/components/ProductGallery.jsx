import React from "react"

const ProductGallery = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  isMobileView,
  setLightboxOpen,
  mainImageRef
}) => (
  <>
    <section className="product-gallery">
      <div className="main-image-container">
        <img
          src={images[currentImageIndex].full}
          alt={`Fall Limited Edition Sneakers - image ${currentImageIndex + 1}`}
          className="main-product-image"
          ref={mainImageRef}
          onClick={() => !isMobileView && setLightboxOpen(true)}
          style={{ cursor: !isMobileView ? "pointer" : "default" }}
        />
        {isMobileView && (
          <>
            <button
              className="prev-image-btn mobile-only"
              onClick={() =>
                setCurrentImageIndex(
                  (currentImageIndex - 1 + images.length) % images.length
                )
              }
              aria-label="Previous image"
            >
              <img src="images/icon-previous.svg" alt="prev" />
            </button>
            <button
              className="next-image-btn mobile-only"
              onClick={() =>
                setCurrentImageIndex((currentImageIndex + 1) % images.length)
              }
              aria-label="Next image"
            >
              <img src="images/icon-next.svg" alt="next" />
            </button>
          </>
        )}
      </div>
      <div className="thumbnail-gallery">
        {images.map((img, idx) => (
          <div className="thumbnail-container" key={idx}>
            <img
              src={img.thumbnail}
              alt={`Thumbnail ${idx + 1}`}
              className={`thumbnail-image${
                currentImageIndex === idx ? " active" : ""
              }`}
              data-index={idx}
              onClick={() => setCurrentImageIndex(idx)}
            />
          </div>
        ))}
      </div>
    </section>
  </>
)

export default ProductGallery
