import { decreaseQuantity, removeFromCart,increaseQuantity} from "../features/cart/cartSlice";
import {useDispatch} from "react-redux";
import "./cartButtons.css";


function CartItem({ item }) {
    const dispatch= useDispatch();
    const handleDecreaseQuantity=()=> {
        dispatch(decreaseQuantity(item.id));
    };
    const handleRemoveFromCart=()=> {
        dispatch(removeFromCart(item.id));
    };
    const handleIncreaseQuantity=()=> {
        dispatch(increaseQuantity(item.id));    
    }

    return (
        <div style={{
            border: "1px solid #1dc33e",
            padding: "6px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "#f8f6f6",
            marginBottom: "12px",
        }}>
            <div style={{ 
                display:"flex",
                alignItems:"center",

            }}>
            <img 
            src={item.image}
            width={120}
            alt={item.image}/>   
            </div>
            <div>
                <p>{item.name}</p> 
                <p style={{margin:0}}>{item.price} ₺</p>
            <p> Ara Toplam: {(item.price * item.quantity).toFixed(2)} ₺</p>
            </div>



            <div style={{display:"flex", alignItems:"center", marginTop:"8px", width:"max-content", gap:"8px"}}>
            <button className="cart-btn" onClick={handleDecreaseQuantity}>
            -
            </button>
            <p>Adet: {item.quantity}</p>

            <button className="cart-btn" onClick={handleIncreaseQuantity}>
            +
            </button>
            <button className="cart-btn cart-btn-danger" onClick={handleRemoveFromCart}>
            Sil
            </button>
            </div>
        </div>
        
    );
}
export default CartItem;