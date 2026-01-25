import { createSlice } from '@reduxjs/toolkit';

const initialState = { message: '', show: false };

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast(state, action) {
            state.message = action.payload;
            state.show = true;
        },
        hideToast(state) {
            state.show = false;
        }
    }
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
