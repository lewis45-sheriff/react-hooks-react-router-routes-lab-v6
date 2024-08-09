import React from 'react';
import Movie from './Movie';

function Home({ movies }) {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;