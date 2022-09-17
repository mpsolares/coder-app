import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
