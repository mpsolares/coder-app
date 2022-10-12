import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const {cart, clear, totalProd, priceTotal} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((name !== "") && (email !== "") && (telephone !== "")) {
            const buyer = {name:name, email:email, phone:telephone};
            const items = [];
            cart.forEach(item => {
                items.push({id:item.id, title:item.name, price:item.price, quantity:item.quantity});
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items:items, date:now, total:priceTotal()};
            
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                clear();
            });
        }
    }

    return (
        <div className="container py-5">
            {totalProd() > 0 ?
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="telephone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="telephone" onInput={(e) => setTelephone(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-outline-secondary dropdown" onClick={() => {sendOrder()}}>Generate Order</button>
                </div>
                <div className="col-md-4 mt-4">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={"img/" + item.img} alt={item.name} title={item.name} width="120" /></td>
                                    <td className="text-start align-middle">{item.name} x {item.quantity}</td>
                                    <td className="text-end align-middle">${item.quantity * item.price}</td>
                                </tr>
                            ))} 
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total</td>
                                <td className="text-end fw-bold">${priceTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <Navigate to={"/success/" + orderId} /> : <div className="alert alert-danger text-center" role="alert">Items not found!</div>}
        </div>
    )
}

export default Checkout;