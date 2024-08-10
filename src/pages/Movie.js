import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function Movie({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        <h3>Genres:</h3>
        {movie.genres.map((genre, index) => (
          <span key={index} className="genre">{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;