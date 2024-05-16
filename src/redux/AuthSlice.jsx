import { createSlice } from "@reduxjs/toolkit";
import { authThunk, fetchUserProfile } from "./AuthThunk.jsx";

const initialState = {
  token: null,
  userId: null,
  firstName: null,
  lastName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.userId = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(authThunk.rejected, (state) => {
        state.token = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userId = action.payload.id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.userId = null;
        state.firstName = null;
        state.lastName = null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
