import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (125)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Elevate your style with our exclusive handloom and handcrafted products. Each piece is a testament
               to skilled artisans, blending tradition with modern elegance. From intricately woven textiles to 
               unique handmade artifacts, our collection is a celebration of craftsmanship and culture. 
               Explore the artful fusion of tradition and contemporary design, and make a statement with 
               one-of-a-kind creations that reflect authenticity and individuality. Shop now for timeless pieces 
               that bring a touch of artisanal charm to your wardrobe and home.</p>
        </div>
    </div>
  )
}

export default DescriptionBox