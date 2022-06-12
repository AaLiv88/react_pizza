import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzasStatus",
    async (params) => {
        const { data } = await axios.get(
            "https://6294eeb9a7203b3ed07431ae.mockapi.io/pizzes", { params }
        );
        return data;
    }
);

const initialState = {
    pizzas: [],
}

export const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.pizzas = action.payload.pizzas;
        }
    }
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer