import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesByName } from "../api/movieApi";
import Loader from "../components/Loader/Loader";
import SearchInput from "../components/SearchInput/SearchInput";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("title")) {
      setTitle(searchParams.get("title"));
    }
  }, []);
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

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    setSearchParams({ title: newTitle });
  };
  return (
    <>
      <SearchInput onSubmit={handleTitleChange} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
