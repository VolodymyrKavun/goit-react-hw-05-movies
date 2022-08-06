import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader';
import Header from 'components/Header';

// import Home from 'components/pages/Home';
// import Movies from 'components/pages/Movies';
// import MovieDetails from 'components/pages/MovieDetails';
// import Cast from 'components/pages/Cast';
// import Reviews from 'components/pages/Reviews';
// import NotFound from 'components/pages/NotFound';

const Home = lazy(() => import('components/pages/Home'));
const Movies = lazy(() => import('components/pages/Movies'));
const MovieDetails = lazy(() => import('components/pages/MovieDetails'));
const Cast = lazy(() => import('components/pages/Cast'));
const Reviews = lazy(() => import('components/pages/Reviews'));
const NotFound = lazy(() => import('components/pages/NotFound'));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
