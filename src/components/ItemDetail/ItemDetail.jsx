import React from "react";
import '../ItemDetail/ItemDetail.css';


export const ItemDetail = ({data}) => {
return(
    <div className="container">
        <div className="col-md-3">
            <div className="detail card col-md">
                <img className="detail_image" src={data.img} alt={data.name} />
                <div className="card-body description">
                    <p className="marca"><b>{data.name}</b></p>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default ItemDetail;