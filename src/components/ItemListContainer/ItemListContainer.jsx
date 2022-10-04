import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Loading } from "../Loading/Loading";
import Itemlist from "../ItemList/ItemList";

const ItemDetailsContainer = () => {
  
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const response = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(response).then((snapShot) => {
            if (snapShot.size > 0) {
                setItem(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }         
        });
    }, [id]);

    return (
        <div className="">
            {loading ? <Loading /> : <Itemlist Prod={item} />}
        </div>
    )
}

export default ItemDetailsContainer;
