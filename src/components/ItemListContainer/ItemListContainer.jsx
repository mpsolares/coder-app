import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetails from "./ItemDetails";
import Loading from "../Loading/Loading";

const ItemDetailsContainer = () => {
  
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "items", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }            
        });
    }, [id]);

    return (
        <div className="">
            {loading ? <Loading /> : <ItemDetails item={item} />}
        </div>
    )
}

export default ItemDetailsContainer;
