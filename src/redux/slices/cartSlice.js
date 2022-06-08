import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    totalPrice: 0,
}

function setTotalPrice(state) {
    state.totalPrice = state.cartList.reduce((sum, pizza) => pizza.price * pizza.count + sum, 0);
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartList(state, action) {
            const cartIncludes = state.cartList.find(pizza => {
                const id = pizza.id === action.payload.id;
                const size = pizza.size === action.payload.size;
                const type = pizza.type === action.payload.type;
                return id && size && type;
            });
            if (cartIncludes) {
                cartIncludes.count++;
            } else {
                state.cartList.push({
                    ...action.payload,
                    count: 1,
                });
            }
            setTotalPrice(state);
        },
        removeFromCartList(state, action) {
            state.cartList = state.cartList.filter(pizza => pizza.id !== action.payload.id);
            setTotalPrice(state);
        },
        clearCartList(state) {
            state.cartList = [];
            setTotalPrice(state);
        },
        decrementPizzas(state, action) {
            const findPizza = state.cartList.find(pizza => pizza.id === action.payload.id);
            if (findPizza) {
                findPizza.count--;
            }
            setTotalPrice(state);
        },
    }
});

export const { addCartList, removeFromCartList, clearCartList, decrementPizzas } = cartSlice.actions;
export default cartSlice.reducer