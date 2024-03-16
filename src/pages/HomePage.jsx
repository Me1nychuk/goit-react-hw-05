import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesPopular } from "../api/movieApi";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const newData = await getMoviesPopular();
        setMovies(newData.data.results);
      } catch (error) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return isLoading ? <Loader /> : <MovieList movies={movies} />;
};

export default HomePage;
