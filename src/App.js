import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App({ props }) {
  return (
    <div className=''>
      <BrowserRouter> 
      <Navbar />
      <div className='container-fluid m-0 p-0'>
      <Routes>
          <ItemListContainer />
          {/* <Route path="/itemDetail" element={<ItemDetail/>} />
          <Route path='/itemDetail/:id' element={<ItemDetail/>}/> */}
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:Id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
