import React from "react";

const Carousel = () => {
 return(
    <div id="carouselExampleSlidesOnly m-0 p-0" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.postimg.cc/CxTWsc3q/slide-02.jpg" className="d-block w-100" alt="Girl standing next to a blue and pink wall"/>
                <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-muted">MPS Store</h2>
                    <p className="text-muted">Some representative placeholder content for the first slide</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.postimg.cc/CxTWsc3q/slide-01.jpg" className="d-block w-100" alt="Man on the street"/>   
                <div className="carousel-caption d-none d-md-block">
                    <h2 className="text-muted">MPS Store</h2>
                    <p className="text-muted">Some representative placeholder content for the first slide</p>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Carousel;