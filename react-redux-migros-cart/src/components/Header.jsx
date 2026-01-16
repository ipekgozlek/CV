import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
const {items, totalAmount} = useSelector((state) => state.cart);
const totalQuantity=items.reduce((sum,item)=>sum + item.quantity,0);

    return (
        <header
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid #333"}}>
            <Link to="/" style={{textDecoration:"none"}}>
            Migros Sanal Market
            </Link>

            
            <Link to="/cart" style={{
            position: "relative",
            textDecoration:"none",
            border: "1px solid #333",
            padding: "8px 12px",
            borderRadius: "8px",
            display:"inline-flex",
            alignItems:"center",
            gap:"8px"
            }}>
                <span>Sepete Git</span>  
                <span style={{opacity:0.8}}>{totalAmount.toFixed(2)} ₺</span>     

            {totalQuantity> 0 && (
            <span
                style={{
            backgroundColor: "#f54a0c",
            color: "#ddebe9",
            position: "absolute",
            top: "-8px",
            right: "-20px",
            minWidth: "20px",
            height: "20px",
            padding: "0 6px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #f54a0c",
                    }}>
                {totalQuantity > 99 ? "99+" : totalQuantity}
                </span>
    )}        
            </Link>  
        </header>
        )
    }

export default Header;