import React from "react";
import brand from "../img/mps.svg";
import CartWidget from "./CartWidget";
import './Header.css';

function Header() {
    return (
        <div >
            <nav class="navbar navbar-expand-lg bg-link navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={brand} alt="" height="40" className="d-inline-block align-text-center"/></a>
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link link_header" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link link_header" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link link_header" href="#">Contact</a>
                            </li>
                        </ul>
                        <div class="navbar-nav d-flex flex-row me-1">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>        
    );
}

export default Header;