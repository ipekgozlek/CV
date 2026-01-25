import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
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
            </div>
        </div>
    );
}

export default Cart;
