import React from 'react';
import './ItemListContainer.css';
import ItemCount from "./ItemCount"

const ItemListContainer = ({props}) => {
  const onAdd = (quantity) =>{
    console.log(`Se agrego ${quantity} unidad/es al carrito`)
  }
  return (
      <div>
          <h1 className="promps">{props}</h1>
         <ItemCount initial={0} stock={10} onAdd={onAdd} /> 
      </div>
  )
}

export default ItemListContainer;