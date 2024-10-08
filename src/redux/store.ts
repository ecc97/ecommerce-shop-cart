import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/CartSlice'
import likeReducer from './features/like/LikeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer, 
    liker: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;