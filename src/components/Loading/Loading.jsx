import React from 'react'
import Footer from '../Footer/Footer'

export const Loading = () => {
    return (
        <div className="">
            <Navbar />
            <div className="cointainer-fluid mx-4">
                <div className="my-3">
                    <ItemDetail data={data}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
