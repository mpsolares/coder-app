import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import { Error404 } from './components/404/Error404';
import { Cart } from './components/Cart/Cart';
import Success from './components/Success/Success';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
        <CartProvider>
          <BrowserRouter> 
            <Navbar />
            <Carousel />
            <div className="container-fluid my-4 px-4">
                <h2 className="mb-4 px-4">PRODUCT OVERVIEW</h2>
            </div>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path={"/Cart"} element={<Cart />} />
                <Route path={"/Checkout"} element={<Checkout />} />
                <Route path={"/success/:id"} element={<Success />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
  );
}

export default App;
