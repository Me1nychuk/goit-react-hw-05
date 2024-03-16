import { Link, useLocation } from "react-router-dom";
import NoMoviesFound from "../NoMoviesFound/NoMoviesFound";

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (movies.length === 0) {
    return <NoMoviesFound />;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
