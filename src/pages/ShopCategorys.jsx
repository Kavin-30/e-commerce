import React, { useContext } from 'react'
import './CSS/ShopCategory.css'

import dropdown from '../components/Assets/dropdown_icon.png'
import { Item } from '../components/Item/Item'
import { ShopContext } from '../Context/ShopContext'
// import { ShopContext } from '../Contexts/ShopContext'



export const ShopCategorys = (props) => {
const {all_product}=useContext(ShopContext);

  return (
    <div className="shop-catergory">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexsort">
        <p>
          <span>Showing 1-13</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
