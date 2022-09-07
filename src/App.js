import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import Header from './components/Navbar/Header';


function App({ props }) {
  return (
    <div className=''>
      <Header />
      <div className='container-fluid my-4'>
        <ItemListContainer props={'Hello from props!'}/>
      </div>
    </div>
  );
}

export default App;
