import { configureStore } from "@reduxjs/toolkit";
import cartreduce from './slices/cartSlice';
import productsreduce from './slices/productSlice';

export const store = configureStore({
    reducer : {
        cart : cartreduce,
        products : productsreduce,
    },
})