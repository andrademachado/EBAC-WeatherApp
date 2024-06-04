import { configureStore } from "@reduxjs/toolkit";

import mainPlaceReducer from './reducers/mainPlace'
import mapSliceReducer from './reducers/map'

import api from '../services/api'

export const store = configureStore({
    reducer: {
        mapSlice: mapSliceReducer,
        mainPlace: mainPlaceReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>