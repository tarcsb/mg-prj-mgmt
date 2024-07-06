import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null,
    success: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
        clearNotification: (state) => {
            state.error = null;
            state.success = null;
        },
    },
});

export const { setError, setSuccess, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
