import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/assets/pic1.jpg" },
  { src: "/assets/pic2.jpg" },
  { src: "/assets/pic3.jpg" }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="gallery" className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img.src} 
            alt={`Wedding ${index + 1}`} 
            onClick={() => setOpen(true)} 
            style={{ cursor: "pointer", width: "150px", margin: "10px", borderRadius: "8px" }} 
          />
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={images} />
    </section>
  );
};

export default Gallery;