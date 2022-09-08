import React,{useState} from "react";

const ItemCount = ({initial,stock,onAdd}) =>{
const [count, setcount]= useState(initial);
const decrease = () =>{
    setcount(count - 1);
}
const increase = () =>{
    setcount(count + 1);
}
    return(
        <div className="counter">
            <button type="button" className="btn btn-outline-secondary mx-2 mb-2" disabled={count<=initial} onClick={decrease}> - </button>
            <span>{count}</span>
            <button type="button" className="btn btn-outline-secondary mx-2 mb-2" disabled={count>=stock} onClick={increase}> + </button>
            <div>
                <button type="button" className="btn btn-outline-secondary mx-2" disabled={count<=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;