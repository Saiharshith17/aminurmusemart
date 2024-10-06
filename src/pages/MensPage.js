import React from 'react'
import { menData } from '../data/mens'
import './MensPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const MensPage = () => {
    return (
      <div className="page-container">
        <div className="navbar-filters">
          {/* Navbar filters go here */}
         
        </div>
        <div className="main-content">
         <div className="product-display">
         <h1 className="main-content-head">CLOTHING & ACCESSORIES</h1>
         <div className="product-display-item">
         {
           menData.map((item, index) => {
              return (
                 <div className="product-item" key={index}>
                    <div className="product-image">
                    <img src={item.image} alt={item.model}/>
                    </div>
                    <div className="product-desc">
                        <h2>{item.brand},{item.type}</h2>
                        <p className="first">{item.model}</p>
                        <p className="second">{item.description}</p>
                        <span> <span> ₹ {item.sprice} <span className="product-strikeout">₹{item.cprice}</span></span><span className="discount">{item.discount}off</span>
                        </span>
                           </div>
                    <div className="product-stars">
                    <FontAwesomeIcon icon={faHeart} />

                        </div>
                    
                 </div>
                    
              );
           })}
           </div>

        
         </div>
        </div>
      </div>
      
    );
  };
  
  export default MensPage;
  

