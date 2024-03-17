import { useState, useEffect } from "react";
import { getCredits } from "../../api/movieApi";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
const MovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const newData = await getCredits(movieId);
        setCredits(newData.data.cast);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h2>
        Credits:
        <ul>
          {credits.map(({ original_name, profile_path, character, id }) => (
            <li key={id}>
              <img
                src={"https://image.tmdb.org/t/p/w200/" + profile_path}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default MovieCast;
