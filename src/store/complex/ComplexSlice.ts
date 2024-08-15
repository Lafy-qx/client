import { createSlice } from "@reduxjs/toolkit"
import { ComplexState } from "./ComplexTypes"
import { getComplexesHandler } from "./ComplexHandlers"

const initialState: ComplexState = {
    complexes: []
}

const complexSlice = createSlice({
    name: 'complex',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        getComplexesHandler(builder);
    }
})

export const { } = complexSlice.actions
export default complexSlice.reducer
