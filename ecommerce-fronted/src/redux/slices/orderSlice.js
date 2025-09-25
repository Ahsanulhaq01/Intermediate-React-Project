import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrdersData = createAsyncThunk('orders' , async () => {
    const response = await axios.get(`api/orders?expand=products`);
    return response.data;
})

export const orderSlice = createSlice({
    name :'orders',
    initialState : {
        isLoading : false,
        orders : [],
        error : null,
    },
    extraReducers : (builder)=>{
        builder.addCase(getOrdersData.pending , (state)=>{
            state.isLoading = true;

        })
        builder.addCase(getOrdersData.fulfilled , (state , action)=>{
            state.orders = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getOrdersData.rejected , (state , action)=>{
            state.error = action.error.message;
        })
    }
})

export default orderSlice.reducer;

