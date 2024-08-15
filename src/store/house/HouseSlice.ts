import { createSlice } from "@reduxjs/toolkit"
import { HOUSE_STATE } from "./HouseTypes"
import { getAllHouseHandler, getParamsHouseHandler,} from "./HouseHandlers"

const initialState: HOUSE_STATE = {
    allHouse: []
}
const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        getAllHouseHandler(builder)
        getParamsHouseHandler(builder)
    }
})

export const { } = houseSlice.actions
export default houseSlice.reducer