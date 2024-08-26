import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <Navbar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movies.map((movie, index) => (
          <MovieCard title={movie.title} key={index} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;