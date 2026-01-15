import {useSelector} from 'react-redux';


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
            borderBottom: "1px solid #333",
        }}
     >
        <div> 
            <h1>React-Redux Migros Cart</h1>
            <div>
                <span>Total Quantity: {totalQuantity}</span>
                <span>Total Amount: {totalAmount.toFixed(2)}</span>
            </div>
        </div>
         </header>)}

export default Header;