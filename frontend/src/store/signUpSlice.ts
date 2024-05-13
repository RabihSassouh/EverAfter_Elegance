import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 1,
    userType: null, //1 = couple, 2 = business
    data: {},
    // other relevant state variables
};

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setStep(state, action) {
            state.step = action.payload;
        },
        setUserType(state, action) {
            state.userType = action.payload;
        },
        setData(state, action) {
            state.data = { ...state.data, ...action.payload }; 
        },
    },
});

export const { setStep, setUserType, setData } = signUpSlice.actions;

export default signUpSlice.reducer;
