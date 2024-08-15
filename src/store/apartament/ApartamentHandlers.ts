import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { ApartamentState} from "./ApartamentTypes"
import {getParamsApartamentsFunc } from "./ApartamentActions"

export const getApartamentHandler = (builder: ActionReducerMapBuilder<ApartamentState>) => {
    builder
        .addCase(getParamsApartamentsFunc.pending,
            (state) => {

            }
        )
        .addCase(getParamsApartamentsFunc.rejected,
            (state, action) => {
                console.log("Что-то пошло не так")
                console.log(state, "Стейты")
                console.log(action, "Актион")
            }
        )
        .addCase(getParamsApartamentsFunc.fulfilled,
            (state, action) => {
                // console.log(state, "Стейты")
                // console.log(action, "Актион")
                // console.log("Все работает")

                state.apartaments = action.payload
            }
        )
}



