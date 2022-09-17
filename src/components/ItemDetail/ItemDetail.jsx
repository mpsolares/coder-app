import React from "react";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css';

export const ItemDetail = ({data}) => {

    const onAdd = (quantity) =>{
        console.log(`Se agrego ${quantity} unidad/es al carrito`)
      }

return(
    <div className="container-fluid mt-4 pt-2">
        <div className="row mt-4">
            <div className="col-md-3 offset-md-3">
                <img className="img-fluid" src={"../img/" + data.img} alt={data.name} />
            </div>
            <div className="col-md-3">
                <h3 className="mx-2">{data.name}</h3>
                <p className="mx-2"><Link to={"/" + data.category} className="text-decoration-none"><i>{data.category}</i></Link></p>
                <p className="mx-2">{data.description}</p>
                <p className="mx-2 mb-3">${data.price}</p>
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
        </div>
    </div>
);
}

export default ItemDetail;