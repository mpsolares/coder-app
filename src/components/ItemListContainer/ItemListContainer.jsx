import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { promise } from "../../Mock";
import Itemlist from "../ItemList/ItemList";



const ItemListContainer = () => {
 const [Products, setProducts]= useState([])
 const [loading, setloading]= useState(true)

 useEffect(() =>{
    promise
    .then((response)=> setProducts(response))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
 },[])

 return(
    <div>
        {
        loading
        ?
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            :
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.postimg.cc/CxTWsc3q/slide-02.jpg" className="d-block w-100" alt="Girl standing next to a blue and pink wall"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-muted">Coza Store</h2>
                                <p className="text-muted">Some representative placeholder content for the first slide</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.postimg.cc/CxTWsc3q/slide-01.jpg" className="d-block w-100" alt="Man on the street"/>   
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="text-muted">Coza Store</h2>
                                <p className="text-muted">Some representative placeholder content for the first slide</p>
                            </div>
                        </div>
                    </div>
                </div>

        <div className="container list my-4">
        <h1>PRODUCT OVERVIEW</h1>
            <Itemlist Prod = {Products}/>
        </div>
    </div>
}
</div>
 )
 
}

export default ItemListContainer;