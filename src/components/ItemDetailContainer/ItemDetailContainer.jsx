import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const Objeto = {id:1, name:"Lightweight Jacket", price: "32000", img:"https://i.postimg.cc/fThZTW8X/product-01.jpg", description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."};

export const ItemDetailContainer = () => {
    const [data, setdata] = useState({});

    useEffect( () =>{
        const getdata = new Promise (resolve => {
            setTimeout(() => {
                resolve(Objeto)
            }, 2000);
        });

        getdata.then(res => setdata(res));
    },[])

    return(
<ItemDetail data={data}/>

    );
}
export default ItemDetailContainer;