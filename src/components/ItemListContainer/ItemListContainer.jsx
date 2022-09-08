import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { promise } from "../../Mock";
import Itemlist from "../ItemList/ItemList";



const ItemListContainer = () => {
 const [Productos, setProductos]= useState([])
 const [loading, setloading]= useState(true)

 useEffect(() =>{
    promise
    .then((response)=> setProductos(response))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
 },[])

 return(
    <div> 
        {   
        loading
    ?
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    :
        <div className="lista">
            <Itemlist Prod = {Productos}/>
        </div>
}
</div>
 )
 
}

export default ItemListContainer;