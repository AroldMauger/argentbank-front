import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "./AuthThunk.jsx";

//On définit l'état initial pour l'authentification

const initialState = {
    isConnected: false,
    isLoading:false,
    token: null,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //On définit les états pour la déconnexion
        logout(state) { 
            state.isConnected = false;
            state.isLoading = false;
            state.token = null;
            state.error = null;
        },
        },
        extraReducers: (builder) => {
        builder
        //En cas de chargement
        .addCase(authThunk.pending, (state) => {
            state.isConnected = false;
            state.isLoading = true;
            state.token = null;
            state.error = null;
            })
        //En cas de succès
        .addCase(authThunk.fulfilled, (state, action) => {
            state.isConnected = true;
            state.isLoading = false;
            state.token = action.payload.body.token;
            state.error = null;
        })
        //En cas d'erreur
        .addCase(authThunk.rejected, (state, action) => {
            state.isConnected = false;
            state.isLoading = false;
            state.token = null;
            state.error = action.payload;
        });
     },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;