import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export const ItemCart = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='col-md-12'>
            <div className="row d-flex align-items-center">
                <div className="col-md-2 d-block my-auto">
                    <img src={product.pictureURL} alt={product.title} width='110' />
                </div>
                <div className="col-md-2 h6 d-block my-auto">
                    <p><b>{product.title}</b></p>
                </div>
                <div className="col-md-2 h6 d-block my-auto">
                    <p>Amount: <b>{product.cantidad}</b></p>
                </div>
                <div className="col-md-2 h6 d-block my-auto">
                    <p>Unit: <b>${product.price}</b></p>
                </div>
                <div className="col-md-2 h6 d-block my-auto">
                    <p>SubTotal: <b>${product.price * product.cantidad}</b></p>
                </div>
                <div className="col-md-2 h6 d-block my-auto">
                    <button className='btn btn-warning text-black d-block mx-auto rounded-pill' onClick={() => removeItem(product.id)} style={{boxShadow: "0px 3px 5px #000", fontWeight: '600'}}>Remove</button>
                </div>
                <hr className='mt-2' />
            </div>
        </div>
    )
}
