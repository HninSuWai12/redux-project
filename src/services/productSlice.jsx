import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products:[],
        fav:[],
    },
    reducers:{
        addProducts:(state , action)=>{
            state.products = action.payload
        },
        addFav:(state , action)=>{
            state.fav.push (action.payload)
        },
        removeFav:(state , action)=>{
            state.fav = state.fav.filter(item => item.id !== action.payload.id)
        }
    }
});
 export const {addProducts , addFav , removeFav} = productSlice.actions;
 export default productSlice.reducer