import { configureStore } from "@reduxjs/toolkit";
import cartreduce from './slices/cartSlice';
import productsreduce from './slices/productSlice';
import ordersreduce from './slices/orderSlice';

export const store = configureStore({
    reducer : {
        cart : cartreduce,
        products : productsreduce,
        orders : ordersreduce,
    },
})