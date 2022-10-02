import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import '../ItemDetail/ItemDetail.css';

export const ItemDetail = ({data}) => {
    const {addItem} = useContext(CartContext);
    const [ quantity, setQuantity ] = useState(0)

    const onAdd = (quantity) =>{
        console.log(`Se agrego ${quantity} unidad/es al carrito`)
        setQuantity(quantity);
        addItem(data, quantity);
      }
    { quantity === 0 ? (
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
    ):(
        <link to='/cart'>Ir al carrito</link>
    )}
return(
    <div className="container-fluid mt-2 pt-2">
    <div className="row mt-4 d-flex justify-content-center">
        <div className="col-md-1 m-0 offset-md-1">
            <div className="d-flex align-items-end flex-column mb-3">
                <div className="p-2 pt-0 ">
                    <img className="img-preview" src={"../img/" + data.imgDetail1} alt={data.name}/>
                </div>
                <div className="p-2">
                    <img className="img-preview" src={"../img/" + data.imgDetail2} alt={data.name}/>
                </div>
                <div className="p-2">
                    <img className="img-preview" src={"../img/" + data.imgDetail3} alt={data.name}/>
                </div>
            </div>
            
        </div>
        <div className="col-md-5">
            <img className="img-fluid" src={"../img/" + data.img} alt={data.name} />
        </div>
        <div className="col-md-5">
            <h3 className="mx-2 card-title">{data.name}</h3>
            <p className="mx-2"><Link to={"/" + data.category} className="text-decoration-none text-secondary"><i>{data.category}</i></Link></p>
            <p className="mx-2">{data.description}</p>
            <p className="mx-2 mb-3 price">${data.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    </div>
</div>
);
}

export default ItemDetail;