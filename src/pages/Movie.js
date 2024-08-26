import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);
  return (
    <>
      <header>
        {/* What component should go here? */}
        <Navbar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie?.title}</h1>
        <p>{movie?.time}</p>
        {movie?.genres?.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;