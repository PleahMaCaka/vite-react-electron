import { configureStore } from "@reduxjs/toolkit"
import AddCountSlice from "./CounterSlice"


export const store = configureStore({
    reducer: {
        counter: AddCountSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch