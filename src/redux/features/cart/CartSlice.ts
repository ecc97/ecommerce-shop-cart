import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductItem {
    id: number;
    title: string;
    price: string;
    category: string;
    image: string;
    idUser?: string;
}

interface CartState {
    products: ProductItem[];
}

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.products = action.payload;
        },
        addToCart: (state, action: PayloadAction<ProductItem>) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            // state.products.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.products = [];
        }
    }
})

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;

