import { createSlice } from "@reduxjs/toolkit"
import { ApartamentState } from "./ApartamentTypes"
import { getApartamentHandler } from "./ApartamentHandlers"

const initialState: ApartamentState = {
    apartaments: []
}

const apartamentSlice = createSlice({
    name: 'apartament',
    initialState,

    reducers: {

    },
    extraReducers(builder) {
        getApartamentHandler(builder);
    }
})

export const { } = apartamentSlice.actions
export default apartamentSlice.reducer
