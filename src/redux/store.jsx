import {configureStore } from '@reduxjs/toolkit';
import authSlice from './AuthSlice.jsx';

// On configure un store pour y mettre les states. On associe notre Slice "authSlice" au nom "auth"
const store = configureStore({
        reducer:{
            auth: authSlice
        }
    })

    export default store;