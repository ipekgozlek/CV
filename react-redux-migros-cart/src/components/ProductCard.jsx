import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { showToast } from "../features/toastSlice";
import { toggleFavorite } from "../features/favoritesSlice";
import "./ProductCard.css";

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state =>
        state.favorites.items.some(item => item.id === product.id)
    );

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        dispatch(showToast(`✅ ${product.name} sepete eklendi`));
    };

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product));
        const message = isFavorite
            ? `💔 ${product.name} favorilerden çıkarıldı`
            : `❤️ ${product.name} favorilere eklendi`;
        dispatch(showToast(message));
    };

    return (
        <div className="productCard">
            <button className="favoriteBtn" onClick={handleToggleFavorite}>
                {isFavorite ? "❤️" : "🤍"}
            </button>

            <img
                src={product.image}
                alt={product.name}
            />
            <p className="productName">{product.name}</p>
            <p className="productPrice">{product.price} ₺</p>

            <button
                className="addToCartBtn"
                onClick={handleAddToCart}>
                Sepete Ekle
            </button>

        </div>
    );
}
export default ProductCard;