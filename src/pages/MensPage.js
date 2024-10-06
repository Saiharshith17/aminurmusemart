import React,{useState} from 'react'
import { menData } from '../data/mens'
import './MensPage.css'
 
import MensItemPage from './MensItemPage';

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
           menData.map((item) => {
            
              return <MensItemPage key={item.id} id={item.id} model={item.model} type={item.type} description={item.description} cprice={item.cprice} sprice={item.sprice} discount={item.discount} image={item.image} brand={item.brand}/>
           })}
           </div>

        
         </div>
        </div>
      </div>
      
    );
  };
  
  export default MensPage;
  

