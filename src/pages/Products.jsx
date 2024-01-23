import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import  Breadcrums  from '../components/Breadcrum/Breadcrums';
import  ProductDisplay  from '../components/ProductDisplays/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';
// import { ShopContext } from '../Contexts/ShopContext';

export const Products = () => {
  const {all_product}=useContext(ShopContext);
  const   {productId}=useParams();
  const product =all_product.find((e)=> e.id === Number(productId));
  return (
     <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
     </div>
  );
}
// export default Products;