import { decreaseQuantity, removeFromCart,increaseQuantity} from "../features/cart/cartSlice";
import {useDispatch} from "react-redux";

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
            border: "1px solid #6a0808",
            padding: "6px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "#e7734c",
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



            <div style={{display:"flex", alignItems:"center", marginTop:"8px"}}>
            <button onClick={handleDecreaseQuantity} style={{marginLeft: '8px'}}>
            -
            </button>
            <p>Adet: {item.quantity}</p>

            <button onClick={handleIncreaseQuantity} style={{marginLeft: '8px'}}>
            +
            </button>
            <button onClick={handleRemoveFromCart} style={{marginLeft: '8px'}}>
            Sil
            </button>
            </div>
        </div>
        
    );
}
export default CartItem;