import { configureStore } from "@reduxjs/toolkit"
import { shopSlice } from "./reducers/shop.slice"

export const store = configureStore({
    reducer: {
        shop: shopSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>