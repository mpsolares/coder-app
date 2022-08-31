import './App.css';
import ItemListContainer from './assets/container/ItemListContainer';
import Header from './assets/Navbar/Header';


function App() {
  return (
    <div className='container-fluid fondo_amarillo'>
      <Header />
      <ItemListContainer />
    </div>
  );
}

export default App;
