import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice {
    isOpen: boolean;
}

const initialState: ModalSlice = {
    isOpen: false
}

export const modalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        setOpen(state: ModalSlice) {
            state.isOpen = !state.isOpen;
        }
    },
});

export const { setOpen } = modalSlice.actions
export default modalSlice.reducer;