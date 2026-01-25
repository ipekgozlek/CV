import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesState = () => {
    try {
        const raw = localStorage.getItem("favoritesState");
        if (!raw) return [];
        return JSON.parse(raw);
    } catch {
        return [];
    }
};

const saveFavoritesState = (favorites) => {
    try {
        localStorage.setItem("favoritesState", JSON.stringify(favorites));
    } catch (e) {
        console.warn("Failed to save favoritesState", e);
    }
};

const initialState = { items: loadFavoritesState() };

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action) {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id);

            if (existing) {
                // Varsa çıkar
                state.items = state.items.filter(item => item.id !== product.id);
            } else {
                // Yoksa ekle
                state.items.push(product);
            }

            // LocalStorage'a kaydet
            saveFavoritesState(state.items);
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
