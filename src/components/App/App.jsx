import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Movies from 'components/pages/Movies';
import MovieDetails from 'components/pages/MovieDetails';
import Cast from 'components/pages/Cast';
import Reviews from 'components/pages/Reviews';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path=":movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
