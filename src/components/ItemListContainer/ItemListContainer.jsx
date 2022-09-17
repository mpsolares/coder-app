import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Mock from "../../Mock";
import Itemlist from "../ItemList/ItemList";  
import Carousel from "../Carousel/Carousel";
import Navbar from "../NavBar/Navbar";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
 
  useEffect(() =>{
     const getData = new Promise((resolve =>{
       setTimeout(() => {
         resolve(Mock)
       }, 500);
     }));
     if (categoryId) {
       getData.then(res=>setProducts(res.filter(promise => promise.category === categoryId)));
     }else{
       getData.then(res=>setProducts(res));
     }
   },[categoryId])
   
  return(
    <div className=''>
      <Navbar />
      <div className="background">
          <Carousel />    
      </div>  
      <div className="container-fluid my-4 px-4">
          <Itemlist Prod = {products}/>
      </div>
    </div>
  )
  }

export default ItemListContainer;