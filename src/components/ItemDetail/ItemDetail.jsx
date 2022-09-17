import React from "react";
import { Link } from "react-router-dom"
import '../ItemDetail/ItemDetail.css';

export const ItemDetail = ({data}) => {
return(
    <div className="row">
        <div className="col-md-3 offset-md-3">
            <img className="img-fluid" src={"../img/" + data.img} alt={data.name} />
        </div>
        <div className="col-md-3">
            <h3>{data.name}</h3>
            <p><Link to={"/" + data.category} className="text-decoration-none"><i>{data.category}</i></Link></p>
            <p>{data.description}</p>
            <p>${data.price}</p>
        </div>
    </div>
);
}

export default ItemDetail;