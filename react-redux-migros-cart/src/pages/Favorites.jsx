import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Favorites.css";

function Favorites() {
    const favorites = useSelector(state => state.favorites?.items ?? []);


    return (
        <div className="favoritesPage">
            <h2>❤️ Favori Ürünlerim</h2>

            {favorites.length === 0 ? (
                <div className="emptyFavorites">
                    <p>Henüz favori ürününüz yok.</p>
                    <p>Ürün kartlarındaki kalp ikonuna tıklayarak favorilere ekleyebilirsiniz.</p>
                </div>
            ) : (
                <div className="favoritesGrid">
                    {favorites.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
