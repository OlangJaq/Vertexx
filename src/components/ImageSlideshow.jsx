import { useState, useEffect } from "react";

export default function ImageSlideshow({ images = [], title = "Project" }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Filter out empty images
  const validImages = images.filter(img => img && typeof img === "string" ? img.trim() !== "" : !!img);

  useEffect(() => {
    if (!isAutoPlay || validImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
    }, 4000); // Change image every 4 seconds (middle of 3-5 second range)

    return () => clearInterval(interval);
  }, [isAutoPlay, validImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
    // Resume autoplay after 5 seconds of user interaction
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  if (validImages.length === 0) {
    return (
      <div className="image-slideshow">
        <div className="slideshow-placeholder">
          <span>🖼️</span>
          <p>No project images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="image-slideshow">
      <div className="slideshow-container">
        <div className="slideshow-images">
          {validImages.map((image, index) => (
            <div
              key={index}
              className={`slideshow-image ${index === currentImageIndex ? "active" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Dark overlay for text readability */}
        <div className="slideshow-overlay" />

        {/* Navigation dots */}
        {validImages.length > 1 && (
          <div className="slideshow-dots">
            {validImages.map((_, index) => (
              <button
                key={index}
                className={`slideshow-dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Navigation arrows */}
        {validImages.length > 1 && (
          <>
            <button
              className="slideshow-nav prev"
              onClick={() => {
                setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 5000);
              }}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              className="slideshow-nav next"
              onClick={() => {
                setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 5000);
              }}
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}

        {/* Current image counter */}
        {validImages.length > 1 && (
          <div className="slideshow-counter">
            {currentImageIndex + 1} / {validImages.length}
          </div>
        )}
      </div>
    </div>
  );
}
