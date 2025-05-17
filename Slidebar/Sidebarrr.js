
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1899,h_706,al_br,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png',
    title: 'Reasonable Prices on All Your Favorite Items',
    subtitle: 'When Quality Matters, We Deliver',
    label: 'Best Prices',
    buttonText: 'Shop Now',
  },
  {
    image: 'https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1899,h_706,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png',
    title: 'Reasonable Prices on All Your Favorite Items',
    subtitle: 'When Quality Matters, We Deliver',
    label: 'Best Prices',
    buttonText: 'Shop Now',
  },
  {
    image: 'https://static.wixstatic.com/media/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png/v1/fill/w_1899,h_706,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png',
    title: 'Reasonable Prices on All Your Favorite Items',
    subtitle: 'When Quality Matters, We Deliver',
    label: 'Best Prices',
    buttonText: 'Shop Now',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Navigate = useNavigate(); 

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div style={styles.slideshow} >
      {/* Slides Loop */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <img src={slide.image} alt={slide.title} style={styles.image} />
          <div style={styles.overlay}>
            <div style={styles.label}>{slide.label}</div>
            <h1 style={styles.title}>{slide.title}</h1>
            <p style={styles.subtitle}>{slide.subtitle}</p>
            <button onClick={()=>Navigate("/All")} style={styles.button}>{slide.buttonText}</button>
          </div>
        </div>
      ))}


    </div>
  );
};

// Styles for the slideshow
const styles = {
  slideshow: {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',

  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',

  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    color: '#000',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    
  },
  label: {
    backgroundColor: '#ff4d4f',
    color: 'white',
    padding: '5px 10px',
    fontSize: '14px',
    borderRadius: '4px',
    marginBottom: '10px',
    display: 'inline-block',
    
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#6c5ce7',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '30px',
    cursor: 'pointer',
  },

};

export default Slideshow;
