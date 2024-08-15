import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { HOUSE_STATE } from "./HouseTypes";
import { getAllHouseFunc, getParamsHouseFunc } from "./HouseActions";
// Выведление всех домов комплекса
export const getAllHouseHandler = (builder: ActionReducerMapBuilder<HOUSE_STATE>) => {
    builder
        .addCase(getAllHouseFunc.pending,
            (state) => {
            }
        )
        .addCase(getAllHouseFunc.rejected,
            (state, action) => {
                console.log("Что-то пошло не так")
            }
        )
        .addCase(getAllHouseFunc.fulfilled,
            (state, action) => {
                state.allHouse = action.payload

            }
        )
}


export const getParamsHouseHandler = (builder: ActionReducerMapBuilder<HOUSE_STATE>) => {
    builder

        .addCase(getParamsHouseFunc.rejected,
            (state, action) => {
                console.log("Что-то пошло не так")
            }
        )
        .addCase(getParamsHouseFunc.fulfilled,
            (state, action) => {
                state.allHouse = action.payload

            }
        )
}

