import {configureStore } from '@reduxjs/toolkit';
import authReducer from './UserSlice.jsx';

// On configure un store pour y mettre les states. On appelle notre store "auth"
const store = configureStore({
        reducer:{
            auth: authReducer
        }
    })

    export default store;