import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { weatherApi } from "./weatherApi";
import toggleUnits from "./toggleUnits";

export default configureStore({
    reducer: {
        toggle: toggleUnits,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(weatherApi.middleware)
    }
});