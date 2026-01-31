import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Header.css";

function Header() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // URL değiştiğinde arama kutusunu güncelle
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search') || '';
    setSearchQuery(search);
  }, [location.search]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery.trim()}`);
    } else {
      navigate('/');
    }
  };


  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbarInner">
          <Link to="/" className="brand">
            MİGROS Sanal Market
          </Link>

          <div className="headerLinks">
            <Link to="/favorites" className="favoritesLink">
              <span>Favorilerim</span>
              {useSelector(state => state.favorites.items.length) > 0 && (
                <span className="badge">
                  {useSelector(state => state.favorites.items.length)}
                </span>
              )}
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
      </div>

      <div className="subbar">
        <div className="container subbarInner">
          <div className="deliveryInfo">
            <span className="deliveryLabel">Adresime Gelsin</span>
            <span className="deliveryTime">En yakın teslimat: 30-60 dk</span>
          </div>


          <div className="searchWrap">
            <input
              className="searchInput"
              placeholder="Ürün, marka ara…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="searchBtn" onClick={handleSearch}>Ara</button>
          </div>
        </div>
      </div>


    </header>
  );

}

export default Header;