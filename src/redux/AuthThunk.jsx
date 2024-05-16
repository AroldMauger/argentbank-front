import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, getUserProfile } from "../service.jsx";

//  pour l'authentification
export const authThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// On récupère les données du profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (token, { rejectWithValue }) => {
    try {
      const profileData = await getUserProfile(token);
      return profileData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
