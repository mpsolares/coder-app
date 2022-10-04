import React, { useContext } from "react";
import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {totalProd} = useContext(CartContext);
    
    return (
        <div className="navbar-nav d-flex flex-row me-1">
            <Link to={"/Cart"}>
                <button className="btn btn-outline-secondary dropdown mx-4 " type="button" title="Ir al Carrito">
                    <iconify-icon icon="akar-icons:cart" height="30"></iconify-icon>  
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{totalProd() > 0 ? totalProd() : ""}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;
