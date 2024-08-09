import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';


function App({ movies, directors, actors }) {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home movies={movies} />
        </Route>
        <Route path="/movie/:id">
          <Movie movies={movies} />
        </Route>
        <Route path="/directors">
          <Directors directors={directors} />
        </Route>
        <Route path="/actors">
          <Actors actors={actors} />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;