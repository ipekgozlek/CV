import { useEffect } from "react";
import "./toast.css";

function Toast({ message, show, onClose }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return show ? (
        <div className="toast">
            <p>{message}</p>
        </div>
    ) : null;
}

export default Toast;
