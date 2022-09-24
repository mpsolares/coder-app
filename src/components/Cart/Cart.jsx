import React,{ useState } from "react";

const Cart = ({initial, stock, onAdd}) => {
    const [ count, setCount ] = useState (initial);
    const decrease = () => {
        setCount (count - 1);
    }
    const increase  = () => {
        setCount (count + 1);
    }

    const addToCart = () => { 
        onAdd(count)
    }
}

export default Cart;