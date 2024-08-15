import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { bookingState } from "./BookingTypes"
import { bookingCreateFunc} from "./BookingActions"



export const bookingCreateHandler = (builder: ActionReducerMapBuilder<bookingState>) => {
    builder
        .addCase(bookingCreateFunc.pending,
            (state) => {

            }
        )
        .addCase(bookingCreateFunc.rejected,
            (state, action) => {
                console.log("Что-то пошло не так")
                console.log(state, "Стейты")
                console.log(action, "Актион")
            }
        )
        .addCase(bookingCreateFunc.fulfilled,
            (state, action) => {
                console.log(state, "Стейты")
                console.log(action, "Актион")
                console.log("Все работает")

                state.bookings = action.payload

            }
        )

}

