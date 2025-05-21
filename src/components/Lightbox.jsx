import React from "react"

const Lightbox = ({
  lightboxOpen,
  isMobileView,
  images,
  currentImageIndex,
  setCurrentImageIndex,
  setLightboxOpen
}) => {
  if (!lightboxOpen || isMobileView) return null
  return (
    <>
      <div className="lightbox open" aria-hidden="false" role="dialog">
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        />
        <div className="lightbox-content">
          <button
            className="lightbox-close-btn"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <img src="images/icon-close.svg" alt="close" />
          </button>
          <div className="lightbox-image-main-container">
            <button
              className="lightbox-prev-btn"
              onClick={() =>
                setCurrentImageIndex(
                  (currentImageIndex - 1 + images.length) % images.length
                )
              }
              aria-label="Previous image"
            >
              <img src="images/icon-previous.svg" alt="prev" />
            </button>
            <img
              src={images[currentImageIndex].full}
              alt={`Fall Limited Edition Sneakers - large view ${
                currentImageIndex + 1
              }`}
              className="lightbox-main-image"
            />
            <button
              className="lightbox-next-btn"
              onClick={() =>
                setCurrentImageIndex((currentImageIndex + 1) % images.length)
              }
              aria-label="Next image"
            >
              <img src="images/icon-next.svg" alt="next" />
            </button>
          </div>
          <div className="lightbox-thumbnail-gallery thumbnail-gallery">
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
        </div>
      </div>
    </>
  )
}

export default Lightbox
