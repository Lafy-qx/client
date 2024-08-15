
import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";

export const getAllComplex = createAsyncThunk(
    "complex/getAllComplex",
    async (_: void, thunkAPI) => {
        try {
            const allComplexRes = await api.get(`api/complex`)

            if (allComplexRes.status !== 200) {
                return thunkAPI.rejectWithValue(allComplexRes.data);
            }

            return allComplexRes.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

