import { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieById } from "../api/movieApi";
import Loader from "../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const newData = await getMovieById(movieId);
        setDetails(newData.data);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId, location]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={css.wrapper}>
      <BackLink to={backLinkHref.current}>
        Back to{" "}
        {backLinkHref.current.pathname === "/movies" ? "Movies" : "Home"}
      </BackLink>
      <div className={css.mainInfo}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}
          alt={details.original_title}
        />
        <div className={css.infoText}>
          <h2>
            {details.original_title} | {details.release_date.substring(0, 4)}
          </h2>
          <p>User score: {Math.round(details.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <ul>
            <h3>Genres</h3>
            {details.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
      <ul>
        <h2>Additional information</h2>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
