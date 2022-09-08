import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/NavBar/Header';


function App({ props }) {
  return (
    <div className=''>
      <Header />
      <div className='container-fluid my-4'>
      <ItemListContainer />
      <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
