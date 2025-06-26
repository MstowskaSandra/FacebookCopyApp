import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    modalType: '',
    modalData: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.modalType = action.payload.modalType;
            state.modalData = action.payload.modalData;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = '';
            state.modalData = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;