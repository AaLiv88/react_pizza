import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSlice {
    modal: JSX.Element | null;
}

const initialState: ModalSlice = {
    modal: null,
}

export const modalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        setActiveModal(state, action: PayloadAction<JSX.Element | null>) {
            state.modal = action.payload;
        }
    },
});

export const { setActiveModal } = modalSlice.actions
export default modalSlice.reducer;