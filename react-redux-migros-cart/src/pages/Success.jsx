import { useSearchParams, useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Success() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const orderId = params.get("orderId");
    const method = params.get("method");
    const methodText=method==="sodexo" ? "Sodexo" : "Kredi Kartı";

    return (
        <div style={{ padding: "24px" }}>
            <h2>Teşekkürler!</h2>
            <p>Siparişiniz başarıyla alındı.</p>
            <p>Sipariş Numaranız: <strong>{orderId}</strong></p>
            <button className="btn-primary" onClick={() => navigate("/")}>Alışverişe devam</button>
    </div>
);
}