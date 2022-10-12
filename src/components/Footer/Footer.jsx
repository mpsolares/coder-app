import React from "react";
import './Footer.css';
import twitter from "../img/icons/SM-RRSS-01.png";
import youtube from "../img/icons/SM-RRSS-02.png";
import instagram from "../img/icons/SM-RRSS-03.png";
import facebook from "../img/icons/SM-RRSS-04.png";

const Footer = () => {
    return (
        <div className="row footer-backgound">
            <div className="col">
                <div className="container text-white py-4">
                    <div className="row">
                        <div className="col-md-6">
                            <p></p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img className="fb" src={facebook} width="23" alt="facebook" /> 
                            <img className="m-1" src={instagram} width="24" alt="instagram" /> 
                            <img className="m-1" src={youtube} width="24" alt="youtube" /> 
                            <img className="m-1" src={twitter} width="24" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;