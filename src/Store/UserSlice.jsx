import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userData from "../data/userdata.json";
//On fait l'appel au backend avec fetch
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userCredentials),
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            localStorage.setItem('auth', JSON.stringify(data));

            // On récupère les infos utilisateur à partir du userdata.json
            const loggedInUser =  userData.find(user => user.email === userCredentials.email)

            return {data, loggedInUser} // On renvoie data pour accéder au token et loggedInUser pour accéder aux données mockées

        } catch (error) {
            throw error;
        }
    }
);

// On définit les "catégories" du state avec createSlice et notamment le initialState
const userSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        token: null, 
        error: null
    },
    extraReducers: (builder) => {
        builder
        // En cas de chargement
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.token = null; 
                state.error = null;
            })
        // En cas de succès
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token;
                state.error = null;
            })
        // En cas d'erreur
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.token = null;
                console.log(action.error.message);
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message;
                }
            });
    }
});

export default userSlice.reducer;
