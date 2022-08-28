import React from "react";
import brand from "./img/mps.svg";
import cart from './img/cart.svg';
import './Navbar/Header.css';

function Header() {
    return (
        <div className="container">
            <div className="row m-4 d-flex justify-content-center">
            <a className="nav-link active col-3" aria-current="page" href="#"><img src={brand} width="48" alt="Burguer King" /></a>
            <ul className="nav d-flex align-items-center col-6">

                <li className="nav-item">
                    <a className="nav-link link_header" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Contact</a>
                </li>
            </ul>
            <button type="button" class="btn btn-outline-secondary col-1">
                <img src={cart} alt="carrito de compras gris" height="30" />
            </button>
            </div>
         </div>
    );
}

export default Header;