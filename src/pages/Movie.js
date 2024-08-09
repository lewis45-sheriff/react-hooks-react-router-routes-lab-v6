import React from 'react';
import { useParams } from 'react-router-dom';

function Movie({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index} className="genre">{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;