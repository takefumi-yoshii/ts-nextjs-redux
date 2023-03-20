import { configureStore } from '@reduxjs/toolkit';
import { initialState, reducer } from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStoreInstance = ReturnType<typeof initStore>;

export function initStore() {
    return configureStore({
        reducer
    });
}
