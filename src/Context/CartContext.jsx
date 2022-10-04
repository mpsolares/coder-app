import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        const prodSeleccionado = { ...item, quantity }
        
            if (isInCart(item.id)) {
                setCart(cart.map(prod => {
                    return prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                }))
            } else {
                setCart([...cart, prodSeleccionado])
            }
    }
    //console.log(cart);
    
    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }

    const clear = () => setCart([])

    const isInCart = (id) => {
        return cart.find(item => item.id === id) ? true : false
    }


    const totalProd = () => cart.reduce((accumulate, prod) => accumulate + prod.quantity, 0)

    const priceTotal = () => cart.reduce((accumulate, item) => accumulate + item.price * item.quantity, 0)


    return (
        <CartContext.Provider value={{ addItem, clear, isInCart, removeItem, totalProd, priceTotal, cart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;