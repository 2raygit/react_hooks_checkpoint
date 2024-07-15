// src/components/AddMovieForm.jsx
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import  { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { title, description, posterUrl, rating: Number(rating) };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} placeholder="Poster URL" required />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" required />
      <button type="submit">Add Movie</button>
    </form>
  );
};
AddMovieForm.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};
export default AddMovieForm;
