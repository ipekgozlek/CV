import {useDispatch} from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import "./Checkout.css";


function makeOrderId() {
    return `ORD-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`;
}

export default function Checkout() {
const [method,setMethod]= useState("");
const [isPaying,setIsPaying]=useState(false);


const dispatch= useDispatch();
const navigate= useNavigate();


async function handlePay(e) {
    e.preventDefault();
    if (!method) return;

    setIsPaying(true);
    await new Promise((r)=> setTimeout(r, 600));

    const orderId= makeOrderId();
    localStorage.setItem("lastOrderId",orderId);
    localStorage.setItem("lastPaymentMethod",method);

    dispatch(clearCart());
    navigate(`/success?orderId=${orderId}&method=${method}`, {replace:true});

}

return (
    <div className="checkout">
    <h2>Ödeme</h2>

    <form onSubmit={handlePay} className="checkout-card">
        <p className="checkout-subtitle">Ödeme Yöntemi Seçin</p>

        <label className={`option ${method === "card" ? "selected" : ""}`}>
            <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
            />
            <span>Kredi Kartı</span>
        </label>

        <label className={`option ${method === "sodexo" ? "selected" : ""}`}>
            <input
            type="radio"
            name="paymentMethod"
            value="sodexo"
            checked={method === "sodexo"}
            onChange={(e) => setMethod(e.target.value)}
            />
            <span>Sodexo</span>
        </label>
        <button
            className="pay-btn"
            type="submit"
            disabled={!method || isPaying}
        >
            {isPaying ? "İşleniyor..." : "Ödemeyi Tamamla"}
        </button>

        {!method && (
            <small className="hint">Devam etmek için bir yöntem seç.</small>
        )}
        </form>
    </div>
);
}

