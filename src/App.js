import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Products} from './Pages/Products'
import {Cart} from './Pages/Cart'
import { Nav } from './Components/Nav';
import { Product } from './Components/Product';
import { About } from './Components/About';

function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/Products' element= {<Products />} />
          <Route path='/Cart' element= {<Cart />} />
          <Route path='/Product/:id' element= {<Product />} />



          
        </Routes>

      
    
    
    </>
    
   
  );
}

export default App;
