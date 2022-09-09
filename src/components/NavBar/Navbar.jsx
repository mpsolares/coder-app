import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import brand from "../img/mps.svg";
import './Navbar.css';

function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-link navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={brand} alt="" height="40" className="d-inline-block align-text-center"/></a>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        <div className="navbar-nav d-flex flex-row me-1">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>        
    );
}

export default Navbar;