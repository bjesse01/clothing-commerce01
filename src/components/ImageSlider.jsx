import React, { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  useEffect(() => {
    let intervalId;

    if (autoSlideEnabled) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [autoSlideEnabled, images]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setAutoSlideEnabled(false);

    setTimeout(() => {
      setAutoSlideEnabled(true);
    }, 8000);
  };

  return (
    <div className="image-slider">
      <div className="image-container my-3">
        <img
          src={images[currentImageIndex]}
          alt={`Clip ${currentImageIndex + 1}`}
          className="sm:w-[400px] w-full sm:h-[470px] h-[360px] shadow-md rounded-lg"
        />
      </div>
      <div className="thumbnail-images flex item center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[50px] h-[50px] ml-5 rounded-xl cursor-pointer ${
              currentImageIndex === index ? "border-2 border-gray-900" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
