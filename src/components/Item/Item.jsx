import React from "react";
import Stock from "../Stock/Stock";

const Item = ({Prod}) => {
    return(
      <div className="card-group col-3">
        <div className="detail card col-md border-0">
          <img className="card-img-top" src={"img/" + Prod.img} alt={Prod.name} />
          <div className="card-body">
            <h2 className="card-title">{Prod.name}</h2>
            <p className="card-text">{Prod.description}</p>
            <p>$ {Prod.price}</p>
            <p><Stock/></p>
          </div>
        </div>
      </div>
    )
}
export default Item;