import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const Stock = ({props}) => {
    const onAdd = (quantity) =>{
      console.log(`Se agrego ${quantity} unidad/es al carrito`)
    }
    return (
        <div>
          <p className="promps">{props}</p>
          <ItemCount initial={0} stock={10} onAdd={onAdd} /> 
        </div>
    )
  }

export default Stock;