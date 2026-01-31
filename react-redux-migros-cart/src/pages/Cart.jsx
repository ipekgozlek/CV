import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
    const navigate=useNavigate();
    const isCartEmpty= useSelector((state)=> state.cart.items.length===0);
    const { items, totalAmount } = useSelector((state) =>
        state.cart);
    return (
        <div style={{ padding: "24px" }}>
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Sepetiniz Boş.</p>
            ) : (
                items.map((item) => <CartItem key={item.id} item={item} />)
            )}
            <div style={{ marginTop: "6px" }}>
                <h3>Toplam Tutar: {totalAmount.toFixed(2)} ₺</h3>

                <button onClick={() => navigate("/checkout")}
                        disabled={isCartEmpty}
                        style={{
                            marginTop: "12px",
                            padding: "10px 16px",
                            cursor: isCartEmpty ? "not-allowed" : "pointer",
                            backgroundColor: isCartEmpty ? "#ccc" : "#ef461b",
                        }}>
                    Ödemeye Geç
                </button>
            </div>
        </div>
    );
}

export default Cart;
