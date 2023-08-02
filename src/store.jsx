import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./features/MoviesSlice";


const store = configureStore({
    name:'user',
    reducer:{
        movie:MoviesSlice,
    }
});


export default store;