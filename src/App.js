import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';


function App({ props }) {
  return (
    <div className=''>
      <Navbar />
      <div className='container-fluid m-0 p-0'>
      <ItemListContainer />
      <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
