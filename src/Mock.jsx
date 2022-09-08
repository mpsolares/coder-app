const Products = [
    {id:1, name:"Lightweight Jacket", price: "32000", img:"./img/product-01.jpg", description:"Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."},
    {id:2, name:"Esprit Ruffle Shirt", price: "8500", img:"./component/img/product-02.jpg", description:"Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat"},
    {id:3, name:"Classic Trench Coat", price: "52000", img:"./component/img/product-03.jpg", description:"Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."},
    {id:4, name:"Herschel supply", price: "12500", img:"./component/img/product-04.jpg", description:"Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat"},

];

export const promise = new Promise ((response, reject)  => {
    let url =`www.localhost:3000`
    if (url === `www.localhost:3000`){
        setTimeout(()=>{
            response(Products);
        },2000);

    }else{
       reject(`400 not found`)
    }
})