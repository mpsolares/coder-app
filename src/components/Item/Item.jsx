import React from "react";
import { Link } from "react-router-dom";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({Prod}) => {
    const onAdd = (quantity) =>{
      console.log(`Se agrego ${quantity} unidad/es al carrito`)
    }

    return(
      <div className="col-md-3 mb-4">
        <div className="card border-0">
        <Link to={`/item/${Prod.id}`}><img className="img-fluid" src={"img/" + Prod.img} alt={Prod.name} /></Link>
          <div className="card-body">
            <h4 className="card-title card-p">{Prod.name}</h4>
            <p className="card-text card-p">{Prod.description}</p>
            <p className="card-p"><Link to={`/item/${Prod.id}`} className="btn btn-outline-secondary mt-1 mb-1">Detalle</Link></p>
            <p className="card-p price">${Prod.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
          </div>
        </div>
      </div>
    )
}
export default Item;