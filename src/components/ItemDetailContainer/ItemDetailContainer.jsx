import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Navbar from "../NavBar/Navbar";
import Mock from "../../Mock";

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect( () =>{
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(Mock)
            }, 2000);
        });

        getData.then(res=>setData(res.find(promise => promise.id === parseInt(id))));
    },[id])

    return(
        <div className='container-fluid'>
            <Navbar />
            <div className="my-3">
                <ItemDetail data={data}/>
            </div>
        </div>
    );
}
export default ItemDetailContainer;