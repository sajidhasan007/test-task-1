"use client";
import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ThumbnailGallery = () => {
  const mainImageStyle = {
    height: "400px", // Set the desired height here
  };
  return (
    <div className="app-image-gallery-container">
      <Gallery
        items={images}
        thumbnailPosition="right"
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        additionalClass="app-image-gallery" // Add a custom class for styling if needed
        renderItem={(item) => {
          return (
            <div className="flex justify-center items-center h-96">
              <img src={item.original} alt={item.description} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default ThumbnailGallery;
const images = [
  {
    original: "/image-9.jpg",
    thumbnail: "/image-9.jpg",
    description: "Image 1 Description",
  },
  {
    original: "/image-9.jpg",
    thumbnail: "/image-9.jpg",
    description: "Image 1 Description",
  },
  {
    original: "/image-9.jpg",
    thumbnail: "/image-9.jpg",
    description: "Image 1 Description",
  },
];
