import React from "react";
import Item from "../Item/Item";

const Itemlist = ({Prod}) =>{
  return(
    <div className="row px-4 ">
      { Prod.map((Prod)=> <Item key={Prod.id} Prod={Prod}/>) }
    </div>
  )
}

export default Itemlist;