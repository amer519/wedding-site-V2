import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom } from "yet-another-react-lightbox/plugins";
import pic1 from "../assets/pic1.jpg"; 
import pic2 from "../assets/pic2.jpg"; 
import pic3 from "../assets/pic3.jpg"; 

const images = [
  { src: pic1 },
  { src: pic2 },
  { src: pic3 }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="gallery" className="gallery-container">
      <div className="gallery-content">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img.src} 
            alt={`Wedding ${index + 1}`} 
            onClick={() => { setOpen(true); setCurrentIndex(index); }} 
            style={{ cursor: "pointer", width: "150px", margin: "10px", borderRadius: "8px", transition: "transform 0.3s ease-in-out" }} 
            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1.0)"}
          />
        ))}
      </div>
      </div>

      
      {/* Lightbox with Zoom and Fade plugins */}
      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        slides={images} 
        index={currentIndex} 
        plugins={[Zoom]} 
      />
    </section>
  );
};

export default Gallery;