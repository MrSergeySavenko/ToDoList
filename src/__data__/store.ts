import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { toDoData } from './reduser';

const rootReducer = combineReducers({ toDoData });

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware({ serializableCheck: false })],
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
