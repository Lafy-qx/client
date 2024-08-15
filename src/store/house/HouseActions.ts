
import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";


export const getAllHouseFunc = createAsyncThunk(
    "house/getAllHousFunc",
    async (_: void, thunkAPI) => {
        try {
            const searchRes = await api.get(`api/AllHouse/`)

            if (searchRes.status !== 200) {
                return thunkAPI.rejectWithValue(searchRes.data);
            }

            return searchRes.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)



export const getParamsHouseFunc = createAsyncThunk(
    "house/getParamsHousFunc",
    async (complexID: string, thunkAPI) => {
        try {
            const searchRes = await api.get(`api/house/${complexID}`)

            if (searchRes.status !== 200) {
                return thunkAPI.rejectWithValue(searchRes.data);
            }

            return searchRes.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)