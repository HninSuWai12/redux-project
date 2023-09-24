import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeCart: (state, action) => {
            state = state.filter((item) => item.id !== action.payload.id);
        },
    },
});
export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;