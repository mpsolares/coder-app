import React from "react";
import Stock from "../Stock/Stock";

const Item = ({Prod}) => {
    return(
      <div className="container">
        <div className="row col-md-3">
          <div className="card border-0">
            <img className="card-img-top" src={Prod.img} width="300px" alt={Prod.name} />
            <div className="card-body">
              <h2 className="card-title">{Prod.name}</h2>
              <p>$ {Prod.price}</p>
              <p><Stock/></p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Item;