import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Loading } from "../Loading/Loading";

const Success = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "orders", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setOrder({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }            
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : 
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center p-5">
                    <h1>Thank You!</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Buyer</td>
                                <td>{order.buyer.name}</td>
                            </tr>
                            <tr>
                                <td>Items</td>
                                <td>
                                    {order.items.map(item => (<p key={item.id}>{item.title}</p>))}
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><b>${order.total}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}

export default Success;