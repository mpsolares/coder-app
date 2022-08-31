import React from "react";
import './CartWidget.css';
import cart from '../img/cart.svg'

function CartWidget() {
  return (
    <div class="navbar-nav d-flex flex-row me-1">
        <button type="button" class="btn btn-outline-secondary">
            <img src={cart} alt="carrito de compras gris" height="28" />
        </button>
    </div>
    );
}


export default CartWidget;