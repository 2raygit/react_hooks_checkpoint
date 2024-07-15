// src/App.jsx
import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import './styles/styles.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterUrl: 'https://example.com/inception.jpg',
      rating: 9,
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A journey through space and time',
      posterUrl: 'https://example.com/interstellar.jpg',
      rating: 8,
    },
    // Ajoutez d'autres films ici
  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating >= Number(filters.rating))
    );
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filter }));
  };

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, { ...movie, id: prevMovies.length + 1 }]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Movie Application</h1>
        <Filter onFilter={handleFilterChange} />
        <MovieList movies={filteredMovies} />
        <AddMovieForm onAddMovie={handleAddMovie} />
      </div>
    </div>
  );
};

export default App;
