import { combineReducers, configureStore } from '@reduxjs/toolkit';
import utilityReducer from '../reducers/utilitySlice';

const rootReducer = combineReducers({
    utility: utilityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});
