// src/components/MovieCard.jsx
import PropTypes from 'prop-types';
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <span>Rating: {movie.rating}</span>
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
