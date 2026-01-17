import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import "./Header.css";


function Header() {
const {items, totalAmount} = useSelector((state) => state.cart);
const totalQuantity=items.reduce((sum,item)=>sum + item.quantity,0);

return (
  <header className="header">
    <div className="topbar">
    <div className="container topbarInner">
      <Link to="/" className="brand">
        MİGROS Sanal Market
      </Link>

      <Link to="/cart" className="cartLink">
        <span>Sepet</span>
        <span className="cartAmount">{totalAmount.toFixed(2)} ₺</span>

        {totalQuantity > 0 && (
          <span className="badge">
            {totalQuantity > 99 ? "99+" : totalQuantity}
          </span>
        )}
      </Link>
      </div>
    </div>

    <div className="subbar">
    <div className="container subbarInner">
      <div className="deliveryInfo">
        <span className="deliveryLabel">Adresime Gelsin</span>
        <span className="deliveryTime">En yakın teslimat: 30-60 dk</span>
      </div>
      

      <div className="searchWrap">
        <input className="searchInput" placeholder="Ürün, marka ara…" />
        <button className="searchBtn">Ara</button>
      </div>
    </div>
    </div>
   
    
  </header>
);

}

export default Header;