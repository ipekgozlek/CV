import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cartSlice";

const loadCartState=()=> {
    try {
        const raw=localStorage.getItem("cartState");
        if(!raw) return undefined; 
        return JSON.parse(raw); 
    } catch {
        return undefined;
    }
    };
    const saveCartState=(cartState)=> { 
        try {
            localStorage.setItem("cartState",JSON.stringify(cartState));
        } catch (e) { console.warn("Failed to save cartState", e); 
        }
    };

const preLoadedCart=loadCartState();
export const store= configureStore({
    reducer:{
        cart:cartReducer, 
    },
    preloadedState: preLoadedCart ? {cart:preLoadedCart} : undefined,
});
store.subscribe(()=> {
    saveCartState(store.getState().cart);
});
