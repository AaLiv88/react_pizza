import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct() {

        }
    }
})

export const {  } = cartSlice.actions;
export default cartSlice.reducer