import './App.css'
import Blocks from './pages/Blocks.jsx';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import {Routes,Route} from "react-router-dom";

function App() {
  return <>
  <Header />
  <Routes>
    <Route path= "/" element ={<Blocks />} />
    <Route path= "/cart" element ={<Cart />} />
  </Routes>
  </>
}

export default App;
