import { useState, useEffect } from "react";
import { getReviews } from "../../api/movieApi";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const newData = await getReviews(movieId);
        setReviews(newData.data.results);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h2>
        Credits:
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>Authour: {author}</p>
                <p>Review: {content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Sorry, we don`t have any reviews</p>
        )}
      </h2>
    </div>
  );
};

export default MovieReviews;
