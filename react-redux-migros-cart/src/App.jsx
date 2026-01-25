import './App.css'
import Blocks from './pages/Blocks.jsx';
import Header from './components/Header.jsx';
import Cart from './pages/Cart.jsx';
import Favorites from './pages/Favorites.jsx';
import Toast from './components/Toast.jsx';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from './features/toastSlice';

function App() {
  const { message, show } = useSelector(state => state.toast);
  const dispatch = useDispatch();

  return <>
    <Header />
    <Toast message={message} show={show} onClose={() => dispatch(hideToast())} />
    <Routes>
      <Route path="/" element={<Blocks />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </>
}

export default App;
