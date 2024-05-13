import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../service.jsx";

// Un AsyncThunk permet de faire une requête asynchrone pour l'authentification. Cette requête s'appelle "auth/login"

export const authThunk = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const data = await loginUser(email, password);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)