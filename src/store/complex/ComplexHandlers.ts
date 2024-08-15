import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { ComplexState } from "./ComplexTypes"
import { getAllComplex } from "./ComplexActions"

export const  getComplexesHandler = (builder: ActionReducerMapBuilder<ComplexState>) => {
    builder
        .addCase(getAllComplex.pending,
            (state) => {
            }
        )
        .addCase(getAllComplex.rejected,
            (state, action) => {
                console.log("Что-то пошло не так")
            }
        )
        .addCase(getAllComplex.fulfilled,
            (state, action) => {
                state.complexes = action.payload
            }
        )
}
