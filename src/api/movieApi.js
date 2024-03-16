import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2U3ZmEzMzI2YTQyYTkzN2NmYmU4YzUzYmJiNGJiZiIsInN1YiI6IjY1ZjQ3MTk0YTY5OGNmMDE4NmY3YjRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6weYs7WoXakS4Pwoco-qF4GbuEbPBRPbd5sG5De07dA";
const BASE_URL = "https://api.themoviedb.org/3/";


const baseRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});



const getMoviesPopular = () => {
    return baseRequest.get("movie/popular");
}

const getMoviesByName = (movieName) => {
    return baseRequest.get("search/movie", {
        params: {
            query: movieName
        }
    });
}

const getMovieById = (movieId) => {
    return baseRequest.get(`movie/${movieId}`);
}
const getCredits = (movieId) => {
    return baseRequest.get(`movie/${movieId}/credits`);
}
const getReviews = (movieId) => {
    return baseRequest.get(`movie/${movieId}/reviews`);
}

export {  getMovieById, getMoviesPopular, getMoviesByName,getCredits,getReviews};
