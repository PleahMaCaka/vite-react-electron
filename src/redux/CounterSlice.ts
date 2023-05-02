import { createSlice } from "@reduxjs/toolkit"

export const addCountSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        addCount: state => {
            state.count += 1
        }
    }
})

export const { addCount } = addCountSlice.actions
export default addCountSlice.reducer