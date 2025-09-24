import { configureStore } from "@reduxjs/toolkit";
import cartreduce from './slices/cartSlice';

export const store = configureStore({
    reducer : {
        cart : cartreduce,
    },
})