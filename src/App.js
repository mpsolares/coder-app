import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';

function App({ props }) {
  return (
    <div className=''>
      <BrowserRouter> 
      <Navbar />
      <div className='container-fluid m-0 p-0'>
      <Routes>
          <ItemListContainer />
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:Id' element={<ItemDetailContainer/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
