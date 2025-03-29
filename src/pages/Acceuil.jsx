import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  FiZap, // Remplace FiBulb par FiZap (éclair)
  FiDroplet, 
  FiBook, 
  FiLayers, 
  FiTool, 
  FiHome 
} from 'react-icons/fi';
import '../styles/acceuil.css';
import Footer from '../components/Footer';
import CardOuvrier from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Acceuil() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationId;
    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const categories = [
    { name: 'Éclairage', count: 0, icon: <FiZap className="category-icon" /> }, // FiBulb → FiZap
    { name: 'Étanchéité', count: 0, icon: <FiDroplet className="category-icon" /> },
    { name: 'Études', count: 1, icon: <FiBook className="category-icon" /> },
    { name: 'Faux Plafond', count: 1, icon: <FiLayers className="category-icon" /> },
    { name: 'Menuiserie', count: 0, icon: <FiTool className="category-icon" /> },
    { name: 'Plomberie', count: 0, icon: <FiZap className="category-icon" /> },
    { name: 'Pisciniste', count: 0, icon: <FiHome className="category-icon" /> }
  ];

  return (
    <div className="acceuil-container">
      <Navbar />
      
      <div className="acceuil-content">
        <h1>Parcourir les principales catégories de métiers artisanaux</h1>
        
        <div className="categories-container">
          <div className="categories-track">
            <div className="categories-scroll" ref={scrollRef}>
              {categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="icon-container">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>Articles: {category.count}</p>
                </div>
              ))}
              {categories.map((category, index) => (
                <div key={`copy-${index}`} className="category-card">
                  <div className="icon-container">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>Articles: {category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ 
  color: '#2c3e50',
  fontSize: '2.5rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px'
}}>
  Nos Artisans
</h1>
      <br></br>
      <CardOuvrier/>
      <Footer/>
    </div>
   
  );
}

export default Acceuil;