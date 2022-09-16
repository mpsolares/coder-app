import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { promise } from "../../Mock";
import Itemlist from "../ItemList/ItemList";  
import Carousel from "../Carousel/Carousel";



const ItemListContainer = () => {
  const [Products, setProducts]= useState([])
  const {categoryId} = useParams();
 
  useEffect(() =>{
     const getData = new Promise((resolve =>{
       setTimeout(() => {
         resolve(promise)
       }, 500);
     }));
     if (categoryId) {
       getData.then(res=> setProducts(res.filter(promise => promise.category === categoryId)));
     }else{
       getData.then(res=>setProducts(res));
     }
   },[categoryId])
   
  return(
     <div> 
         <div className="background">
             <Carousel />
                  
         </div>  
         <div className="lista">
             <Itemlist Prod = {Products}/>
         </div>
     </div>
  )
  }

export default ItemListContainer;