import { configureStore } from '@reduxjs/toolkit';
import userRestaurantReducer from './slices/userRestaurantSlice';
export const store=configureStore({
    reducer:{
        userRestaurantLoginReducer:userRestaurantReducer
    }
})