import React,{useState} from 'react'
import { menData } from '../data/mens'
import './MensPage.css'

import MensItemPage from './MensItemPage';

const MensPage = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const handleMultiSelect = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };
  const filteredMenData = menData.filter((item) => {
    return (
      (selectedType.length === 0 || selectedType.includes(item.type)) &&
      (selectedBrand.length === 0 || selectedBrand.includes(item.brand)) &&
      (selectedModel.length === 0 || selectedModel.includes(item.model)) &&
      (selectedRating.length === 0 || selectedRating.includes(item.rating)) &&
      (selectedDiscount.length === 0 || selectedDiscount.includes(item.discount)) &&
      item.sprice >= priceRange[0] && item.sprice <= priceRange[1]
    );
  });
  const handleMinPriceChange = (e) => {
    const minPrice = Math.max(0, parseInt(e.target.value));
    setPriceRange([minPrice, priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = Math.min(5000, parseInt(e.target.value));
    setPriceRange([priceRange[0], maxPrice]);
  };
    return (
      <div className="page-container">
       
  <div className="navbar-filters">
    <div className="navbar-header">
      <div className="navbar-header-photo">
    <img src={`${process.env.PUBLIC_URL}/assets/MenWear/header.jpg`} alt="Header Image" />
    </div>
    <div className="navbar-header-line">
      <h2>MODERN MEN'S FASHION</h2>
    </div>
    </div>
    <div className="navbar-start">
    <h1 className="filters-head">Filters</h1>

    {/* Type selection */}
    
    <div className="type-selection">
      <label className="highlight">CATEGORIES</label>
      <div className="type">
        <input
          type="checkbox"
          id="plainTshirt"
          value="Mens Plain Tshirts"
          checked={selectedType.includes("Mens Plain Tshirts")}
          onChange={() => handleMultiSelect("Mens Plain Tshirts", setSelectedType, selectedType)}
        />
        <label htmlFor="plainTshirt">Mens Plain Tshirts</label>
      </div>

      <div className="type">
        <input
          type="checkbox"
          id="dressShirt"
          value="Dress Shirt"
          checked={selectedType.includes("Dress Shirt")}
          onChange={() => handleMultiSelect("Dress Shirt", setSelectedType, selectedType)}
        />
        <label htmlFor="dressShirt">Dress Shirt</label>
      </div>

      <div className="type">
        <input
          type="checkbox"
          id="Jeans"
          value="Jeans"
          checked={selectedType.includes("Jeans")}
          onChange={() => handleMultiSelect("Jeans", setSelectedType, selectedType)}
        />
        <label htmlFor="Jeans">Jeans</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Hoodie"
          value="Hoodie"
          checked={selectedType.includes("Hoodie")}
          onChange={() => handleMultiSelect("Hoodie", setSelectedType, selectedType)}
        />
        <label htmlFor="Hoodie">Hoodie</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Blazer"
          value="Blazer"
          checked={selectedType.includes("Blazer")}
          onChange={() => handleMultiSelect("Blazer", setSelectedType, selectedType)}
        />
        <label htmlFor="Blazer">Blazer</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Jacket"
          value="Jacket"
          checked={selectedType.includes("Jacket")}
          onChange={() => handleMultiSelect("Jacket", setSelectedType, selectedType)}
        />
        <label htmlFor="Jacket">Jacket</label>
      </div>
      {/* Add more types in the same format */}
    </div>

    {/* Brand selection */}
    <div className="brand-selection">
      <label className="highlight">BRANDS</label>
      <div className="type">
        <input
          type="checkbox"
          id="nike"
          value="Nike"
          checked={selectedBrand.includes("Nike")}
          onChange={() => handleMultiSelect("Nike", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="nike">Nike</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="levis"
          value="Levi's"
          checked={selectedBrand.includes("Levi's")}
          onChange={() => handleMultiSelect("Levi's", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="levis">Levi's</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="adidas"
          value="Adidas"
          checked={selectedBrand.includes("Adidas")}
          onChange={() => handleMultiSelect("Adidas", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="adidas">Adidas</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Ralph Lauren"
          value="Ralph Lauren"
          checked={selectedBrand.includes("Ralph Lauren")}
          onChange={() => handleMultiSelect("Ralph Lauren", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="Ralph Lauren">Ralph Lauren</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Under Armour"
          value="Under Armour"
          checked={selectedBrand.includes("Under Armour")}
          onChange={() => handleMultiSelect("Under Armour", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="Under Armour">Under Armour</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="Tommy Hilfiger"
          value="Tommy Hilfiger"
          checked={selectedBrand.includes("Tommy Hilfiger")}
          onChange={() => handleMultiSelect("Tommy Hilfiger", setSelectedBrand, selectedBrand)}
        />
        <label htmlFor="Tommy Hilfiger">Tommy Hilfiger</label>
      </div>
    </div>

    {/* Price Range */}
    <div className="price-selector">
      <label className="highlight">PRICE RANGE</label><br />
      <div className="price-range">
        <div className="price">
          <input
            type="number"
            min="0"
            max="5000"
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            placeholder="Min Price"
          />
        </div>
        <p>To</p>
        <div className="price">
          <input
            type="number"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            placeholder="Max Price"
          />
        </div>
      </div>
      <div className="price-const-range">Price: ₹{priceRange[0]} - ₹{priceRange[1]}</div>
    </div>

    {/* Model selection */}
    <div className="model-selection">
      <label className="highlight">MODEL</label>
      <div className="type">
        <input
          type="checkbox"
          id="Sporty Tee"
          value="Sporty Tee"
          checked={selectedModel.includes("Sporty Tee")}
          onChange={() => handleMultiSelect("Sporty Tee", setSelectedModel, selectedModel)}
        />
        <label htmlFor="Sporty Tee">Sporty Tee</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="ClassicFit"
          value="ClassicFit"
          checked={selectedModel.includes("ClassicFit")}
          onChange={() => handleMultiSelect("ClassicFit", setSelectedModel, selectedModel)}
        />
        <label htmlFor="ClassicFit">Classic Fit</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="511 Slim Fit"
          value="511 Slim Fit"
          checked={selectedModel.includes("511 Slim Fit")}
          onChange={() => handleMultiSelect("511 Slim Fit", setSelectedModel, selectedModel)}
        />
        <label htmlFor="511 Slim Fit">511 Slim Fit</label>
      </div>
    </div>

    {/* Rating selection */}
    <div className="rating-selection">
      <label className="highlight">RATING</label>
      <div className="type">
        <input
          type="checkbox"
          id="fiveStar"
          value="5"
          checked={selectedRating.includes("5")}
          onChange={() => handleMultiSelect("5", setSelectedRating, selectedRating)}
        />
        <label htmlFor="fiveStar">5 Stars</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="fourStar"
          value="4"
          checked={selectedRating.includes("4")}
          onChange={() => handleMultiSelect("4", setSelectedRating, selectedRating)}
        />
        <label htmlFor="fourStar">4 Stars & Above</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="threeStar"
          value="3"
          checked={selectedRating.includes("3")}
          onChange={() => handleMultiSelect("3", setSelectedRating, selectedRating)}
        />
        <label htmlFor="threeStar">3 Stars & Above</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="twoStar"
          value="2"
          checked={selectedRating.includes("2")}
          onChange={() => handleMultiSelect("2", setSelectedRating, selectedRating)}
        />
        <label htmlFor="twoStar">2 Stars & Above</label>
      </div>
    </div>

    {/* Discount selection */}
    <div className="discount-selection">
      <label className="highlight">DISCOUNT</label>
      <div className="type">
        <input
          type="checkbox"
          id="sixtyPercent"
          value="60%"
          checked={selectedDiscount.includes("60%")}
          onChange={() => handleMultiSelect("60%", setSelectedDiscount, selectedDiscount)}
        />
        <label htmlFor="sixtyPercent">60% & Above</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="fourtyPercent"
          value="40%"
          checked={selectedDiscount.includes("40%")}
          onChange={() => handleMultiSelect("40%", setSelectedDiscount, selectedDiscount)}
        />
        <label htmlFor="fourtyPercent">40% & Above</label>
      </div>
      <div className="type">
        <input
          type="checkbox"
          id="thirtyPercent"
          value="30%"
          checked={selectedDiscount.includes("30%")}
          onChange={() => handleMultiSelect("30%", setSelectedDiscount, selectedDiscount)}
        />
        <label htmlFor="thirtyPercent">30% & Above</label>
      </div>
    </div>
  </div>
  </div>

  {/* Main Content */}
  <div className="main-content">
 
    <div className="product-display">
    <div className="navbar-header-mobile">
      <div className="navbar-header-photo-mobile">
    <img src={`${process.env.PUBLIC_URL}/assets/MenWear/header.jpg`} alt="Header Image" />
    </div>
    <div className="navbar-header-line-mobile">
      <h2>MODERN MEN'S FASHION</h2>
    </div>
    </div>
      <h1 className="main-content-head">CLOTHING & ACCESSORIES</h1>
      <div className="product-display-item" >
        {filteredMenData.map((item) => (
          <MensItemPage
            key={item.id}
            id={item.id}
            model={item.model}
            type={item.type}
            description={item.description}
            cprice={item.cprice}
            sprice={item.sprice}
            discount={item.discount}
            image={item.image}
            brand={item.brand}
          />
        ))}
      </div>
    </div>
  </div>
</div>

      
    );
  };
  
  export default MensPage;
  

