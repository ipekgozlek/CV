import {useDispatch} from "react-redux";
import {addToCart} from "../features/cart/cartSlice";


function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart=()=> {
        dispatch(addToCart(product));
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
        
        </div>
    );
}
export default ProductCard;