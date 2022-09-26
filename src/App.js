import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Provider from './components/Context/Context';

function App() {
  return (
    <Provider>
      <BrowserRouter> 
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path={"/Cart"} element={<Cart />} />
            <Route path={"/Checkout"} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
