import { configureStore } from '@reduxjs/toolkit';
import utilityReducer from '../reducers/utilitySlice';
import signUpReducer from './signUpSlice';

export const store = configureStore({
    reducer: {
        utility: utilityReducer,
        signUp: signUpReducer,
    },
});