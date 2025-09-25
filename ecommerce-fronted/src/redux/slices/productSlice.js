import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductData = createAsyncThunk('Products' ,async() => {
    const response = await axios.get(`api/products/`);
    return response.data;
})

export const productSlice = createSlice({
    name :'product',
    initialState : {
        isLoading : false,
        error : null,
        products : [],
    },

    extraReducers : (builder)=>{
        builder.addCase(getProductData.pending,(state)=>{
            state.isLoading = true;
        })
        builder.addCase(getProductData.fulfilled , (state ,action)=>{
            state.products = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProductData.rejected, (state , action)=>{
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;