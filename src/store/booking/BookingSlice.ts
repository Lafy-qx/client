import { createSlice } from "@reduxjs/toolkit";
import { bookingState } from "./BookingTypes";
import { bookingCreateHandler } from "./BookingHandlers";

const initialState: bookingState = {
    bookings: []
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBooking: (state, action) => {
            state.bookings = action.payload;
        }
    },
    extraReducers(builder) {
        bookingCreateHandler(builder);
    }
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;