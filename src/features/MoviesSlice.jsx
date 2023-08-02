import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_,thunkApi) => {
try {
    
} catch (error) {
    
}
  })


const MovieSlice = createSlice({
    name: "Movie",
    initialState: {
        movies: [],
        loading: false,
        error: null
    },
    reducers: {
        getMovies: (state, action) => {
            state.movies = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
})

export const {} = MovieSlice.actions
export default MovieSlice.reducer