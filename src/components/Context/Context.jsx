import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let product = cart.find(x => x.id === item.id);
            cart[cart.indexOf(product)].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);            
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;