import { configureStore } from "@reduxjs/toolkit";
import ComplexSlice from "./complex/ComplexSlice";
import houseSlice from "./house/HouseSlice";
import ApartamentSlice from "./apartament/ApartamentSlice";
import BookingtSlice from "./booking/BookingSlice";

export const store = configureStore({
    reducer: {
        complex: ComplexSlice,
        house: houseSlice,
        apartament: ApartamentSlice,
        booking: BookingtSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch