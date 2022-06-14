import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../types/ICartItem";

interface CartState {
    cartList: ICartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    cartList: [],
    totalPrice: 0,
}

const setTotalPrice = (state: CartState): void => {
    state.totalPrice = state.cartList.reduce((sum, pizza) => pizza.price * pizza.count + sum, 0);
}

const equalPizzas = (pizza: ICartItem, action: PayloadAction<ICartItem>) => {
    const id = pizza.id === action.payload.id;
    const size = pizza.size === action.payload.size;
    const type = pizza.type === action.payload.type;
    return id && size && type;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartList(state: CartState, action: PayloadAction<ICartItem>) {
            const cartIncludes = state.cartList.find(pizza => equalPizzas(pizza, action));
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
        removeFromCartList(state: CartState, action: PayloadAction<ICartItem>) {
            state.cartList = state.cartList.filter(pizza => !equalPizzas(pizza, action));
            setTotalPrice(state);
        },
        clearCartList(state) {
            state.cartList = [];
            setTotalPrice(state);
        },
        decrementPizzas(state: CartState, action: PayloadAction<ICartItem>) {
            const findPizza = state.cartList.find(pizza => pizza.id === action.payload.id);
            if (findPizza) {
                findPizza.count--;
            }
            setTotalPrice(state);
        },
    }
});

export const { addCartList, removeFromCartList, clearCartList, decrementPizzas } = cartSlice.actions;
export default cartSlice.reducer;