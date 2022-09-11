import React from "react";
import Stock from "../Stock/Stock";
import './Item.css';

const Item = ({Prod}) => {
    return(
      <div className="col-3">
        <div className="detail card col-md border-0">
          <img className="card-img-top" src={"img/" + Prod.img} alt={Prod.name} />
          <div className="card-body">
            <h4 className="card-title">{Prod.name}</h4>
            <p className="card-text">{Prod.description}</p>
            <p>$ {Prod.price}</p>
            <p><Stock/></p>
          </div>
        </div>
      </div>
    )
}
export default Item;