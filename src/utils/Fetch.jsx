import axios from "axios";

const FetchMovies = axios.create({
    baseURL:'',
})

export default FetchMovies;