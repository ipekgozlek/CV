import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0 };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            state.totalAmount = Math.round((state.totalAmount + product.price) * 100) / 100;
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existing = state.items.find(item => item.id === id);
            if (existing) {
                if (existing.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existing.quantity -= 1;
                }
                state.totalAmount = Math.round((state.totalAmount - existing.price) * 100) / 100;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existing = state.items.find(item => item.id === id);
            if (existing) {
                state.totalAmount = Math.round((state.totalAmount - (existing.price * existing.quantity)) * 100) / 100;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const existing = state.items.find(item => item.id === id);
            if (existing) {
                existing.quantity += 1;
                state.totalAmount = Math.round((state.totalAmount + existing.price) * 100) / 100;
            }

        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
