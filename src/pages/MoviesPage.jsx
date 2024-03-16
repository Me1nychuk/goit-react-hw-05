import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesByName } from "../api/movieApi";
import Loader from "../components/Loader/Loader";
import SearchInput from "../components/SearchInput/SearchInput";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const newData = await getMoviesByName(title);
        setMovies(newData.data.results);
      } catch (error) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
    };
    if (title !== "") getMovies();
  }, [title]);
  return (
    <>
      <SearchInput onSubmit={setTitle} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
