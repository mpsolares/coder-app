import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'


export const Cart = () => {

    const { cart, precioTotal, clear } = useContext(CartContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState('')
    const [canvas, setCanvas] = useState(true)

    const setOrder = () => {
        const buyer = {name:name, email:email, phone:phone};
        const items = [];
        cart.forEach( item => {
            items.push({id:item.id, title:item.title, price:item.price, quantity:item.cantidad, date:new Date()})
        })

        const order = {buyer: buyer, items:items, total:precioTotal()}
        console.log(order);

        const db = getFirestore();
        const orderCollection = collection(db, 'ordenes');
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id);
            setCanvas(false)
            console.log('numero de orden: ' + data.id);
        })

        

    }


    if (precioTotal() < 1) {

        return (
            <div className='text-center mt-5  p-5 carritoVacio  min-vh-100 '>
                <div className='contenedorVacio p-5 '>
                    <h2 className='h1 d-block my-auto'>There are no bottles in the glass!</h2>
                    <Link to='/' style={{ color: '#ffc107' }}><h3 className='carritoVacioVolver '>Come Back!</h3></Link>
                </div>

            </div>
        )
    }

    return (
        <>
            <div className='container pt-3 text-center text-white p-3 min-vh-100 d-flex align-items-center'>
                <div className="row pt-3 contenedorCart">
                    {cart.map((product) => (
                        <ItemCart key={product.id} product={product} />
                    ))}
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <button className='btn btn-warning text-black d-block mx-auto rounded-pill' onClick={() => clear()} style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600' }}>Delete all</button>
                        </div>
                        <div className="col-md-4 h2">
                            <p>Total: <b>${precioTotal()}</b><span className='iva'>(más IVA)</span></p>
                        </div>
                        <div className="col-md-4">
                            <button className='btn btn-warning text-black d-block mx-auto rounded-pill' style={{ boxShadow: "0px 3px 5px #000", fontWeight: '600' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Buy</button>
                            {/* OFFCANVAS PARA GENERAR ORDENES DE COMPRA  */}
                            {canvas
                            ?
                            <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-body" >
                                        <h2 className='pt-3 orderTitle'>Order</h2>
                                    <div className="mb-3 ms-5 ps-3">
                                        
                                        <input type="text" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput1" placeholder="name" required onInput={(e) => setName(e.target.value)}/>
                                        
                                        <input type="email" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput2" placeholder="name@example.com" required onInput={(e) => setEmail(e.target.value)}/>
                                        
                                        <input type="tel" className="form-control  border-0 border-bottom border-dark mt-4 bg-transparent" id="exampleFormControlInput3" placeholder="phone" required onInput={(e) => setPhone(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 text-start pt-2 ms-5 ps-3">
                                        <button type='submit' className='btn btn-dark rounded-pill me-3' onClick={() => 
                                        {setOrder()}} >Generate Order</button>
                                        <button type="button" className="btn btn-dark rounded-pill ms-3" data-bs-dismiss="offcanvas" aria-label="Close">Exit</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-body" >
                                        <h2 className='pt-5 orderTitle '>Success!</h2>
                                            <h3 className='pt-3 orderSubtitle '>N° Order: <p className='nOrder mt-4'>'{orderId}'</p></h3>
                                    <div className="mb-3 text-start pt-2 d-flex justify-content-center">
                                    <button type="button" className="btn btn-dark rounded-pill ms-3 mt-" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => clear()}>Exit <i className="fa-solid fa-person-through-window"></i></button>
                                    </div>
                                </div>
                            </div>
                            }
                            {/* FINA1 OFFCANVAS  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}