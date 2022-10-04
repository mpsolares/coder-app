import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const Cart = () => {
    const {cart, removeItem, clear, totalProd, priceTotal} = useContext(CartContext);

    return (
        <div className="container">
            {totalProd() > 0 ?
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={"5"} className="text-end">
                                <Link onClick={() => {clear()}}>
                                    <button className="btn btn-outline-secondary dropdown mx-4" title="Vaciar Carrito">Empty Cart <iconify-icon icon="akar-icons:trash-bin" height="24"></iconify-icon></button>
                                </Link>
                            </td>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="text-start"><img src={"img/" + item.img} alt={item.name} title={item.name} width="120" /></td>
                                <td className="text-start align-middle">{item.name}</td>
                                <td className="text-end align-middle">{item.quantity} x ${item.price}</td>
                                <td className="text-end align-middle">${item.quantity * item.price}</td>
                                <td className="text-end align-middle">
                                    <Link onClick={() => {removeItem(item.id)}} className="btn btn-outline-secondary dropdown mx-4"><iconify-icon icon="akar-icons:trash-bin" height="24"></iconify-icon></Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total</td>
                            <td className="text-end fw-bold">${priceTotal()}</td>
                            <td className="text-end">
                                <Link to={"/Checkout"} title="Finalizar Compra">
                                    <button className="btn btn-outline-secondary dropdown mx-4">Checkout <iconify-icon icon="akar-icons:cart" height="24"></iconify-icon></button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            : <div className="alert alert-danger text-center" role="alert">Items not found!</div>}
        </div>
    )
}