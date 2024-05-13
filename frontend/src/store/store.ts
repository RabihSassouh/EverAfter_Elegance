import {combineReducers, configureStore } from '@reduxjs/toolkit';
import utilityReducer from '../reducers/utilitySlice';
import signUpReducer from './signUpSlice';


const rootReducer = combineReducers({
    utility: utilityReducer,
    signUp: signUpReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: {
        utility: utilityReducer,
        signUp: signUpReducer,
    },
});