import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCart = createAsyncThunk('loadCart' , async()=>{
    const response = await axios.get(`/api/cart-items?expand=product`);
    return response.data;
})

export const cartSlice = createSlice({
    name :'cart',
    initialState : {
        isLoading : false,
        cart : [],
        error : null,
    },
    extraReducers :(builder)=>{
       builder.addCase(loadCart.pending , (state)=>{
        state.isLoading = true;
        state.error = null;
       }),
       builder.addCase(loadCart.fulfilled , (state , action)=>{
            state.cart = action.payload;
            state.isLoading =false;
       })
       builder.addCase(loadCart.rejected , (state,action)=>{
        state.error = action.error.message;
       })
    }
})

export default cartSlice.reducer;