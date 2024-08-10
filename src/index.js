import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [moviesResponse, directorsResponse, actorsResponse] = await Promise.all([
          fetch('http://localhost:4001/movies'),
          fetch('http://localhost:4001/directors'),
          fetch('http://localhost:4001/actors')
        ]);

        if (!moviesResponse.ok) throw new Error('Movies data fetch failed');
        if (!directorsResponse.ok) throw new Error('Directors data fetch failed');
        if (!actorsResponse.ok) throw new Error('Actors data fetch failed');

        const [moviesData, directorsData, actorsData] = await Promise.all([
          moviesResponse.json(),
          directorsResponse.json(),
          actorsResponse.json()
        ]);

        setMovies(moviesData);
        setDirectors(directorsData);
        setActors(actorsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<Movie movies={movies} />} />
        <Route path="/directors" element={<Directors directors={directors} />} />
        <Route path="/actors" element={<Actors actors={actors} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;