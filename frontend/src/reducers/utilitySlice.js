import { createSlice } from '@reduxjs/toolkit';

const utilitySlice = createSlice({
    name: 'utility',
    initialState: {
        selectedMenu: 1,
    },
    reducers: {
        setSelectedMenu(state, action) {
            state.selectedMenu = action.payload;
        },
    },
});

export const { setSelectedMenu } = utilitySlice.actions;
export default utilitySlice.reducer;
