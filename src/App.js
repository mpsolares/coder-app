import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { Error404 } from './components/404/Error404';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';



function App() {
 
  const [presentacion, setPresentacion] = useState(true)
 
  const ingresar = () => {
    setPresentacion(false)
  } 

  if(presentacion){
    return (
      <Presentacion ingresar={ingresar}/>
    )
  }

  return (
        <CartProvider>
          <BrowserRouter> 
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path={"/Cart"} element={<Cart />} />
                <Route path={"/Checkout"} element={<Checkout />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
  );
}

export default App;
