import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";
import {  } from "./ApartamentTypes";


export const getParamsApartamentsFunc = createAsyncThunk(
    "apartaments/getParamsApartamentsFunc",
    async ({  complexID, houseID }: { houseID: string, complexID: string } ,thunkAPI) => {
        try {
            const searchRes = await api.get(`api/HouseParams/${complexID}/apartments/${houseID}`)

            if (searchRes.status !== 200) {
                return thunkAPI.rejectWithValue(searchRes.data);
            }

            return searchRes.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)