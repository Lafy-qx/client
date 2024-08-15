import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "../api";
import { bookingApartments } from "./BookingTypes";
// import {AxiosResponse} from "axios";

export const bookingCreateFunc = createAsyncThunk(
    "booking/bookingCreateFunc",
    async (payload: bookingApartments, thunkAPI) => {
        try {
            const res = await api.post("api/booking", {
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
            });

            return res.data;

        } catch (error: any) {
            // Обработка AxiosError для извлечения только сериализуемых данных
            if (error.response) {
                // Запрос выполнен, сервер ответил с кодом состояния
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.request) {
                // Запрос был отправлен, но ответ не был получен
                return thunkAPI.rejectWithValue("Нет ответа от сервера");
            } else {
                // Что-то произошло при настройке запроса, вызвавшее ошибку
                return thunkAPI.rejectWithValue("Не удалось отправить запрос");
            }
        }
    }
)

