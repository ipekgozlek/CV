import {useDispatch} from "react-redux";
import {addToCart, decreaseQuantity, removeFromCart} from "../features/cart/cartSlice";


function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart=()=> {
        dispatch(addToCart(product));
    };
    const handleDecreaseQuantity=()=> {
        dispatch(decreaseQuantity(product.id));
    };
    const handleRemoveFromCart=()=> {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div  
        style={{
        border: "1px solid #444",
        padding: "12px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
            <img 
            src={product.image}
            width={120}
            alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.price} ₺</p>    

            <button onClick={handleAddToCart}>
                Sepete Ekle
            </button>
            <button onClick={handleDecreaseQuantity} style={{marginLeft: '8px'}}>
                Sepetten Çıkar
            </button>
            <button onClick={handleRemoveFromCart} style={{marginLeft: '8px'}}>
                Tüm Sepeti Sil
            </button>
        </div>
    );
}
export default ProductCard;