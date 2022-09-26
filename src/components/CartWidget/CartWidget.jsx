import React, { useContext } from "react";
import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

const CartWidget = () => {
    
    const {cartTotal} = useContext(CartContext);
    
    return (
        <div className="navbar-nav d-flex flex-row me-1">
            {(cartTotal() > 0) ?
            <Link to={"/Cart"}>
                <button className="btn btn-outline-secondary dropdown mx-4" type="button" id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" title="Ir al Carrito">
                        <iconify-icon icon="akar-icons:cart" height="30"></iconify-icon>  
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cartTotal()}</span>
                    </button>
                </Link> : ""}
            </div>
)
}

export default CartWidget;
