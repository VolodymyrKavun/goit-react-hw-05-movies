import { useState, useEffect } from 'react';
import { getDataFromApiTrending } from 'components/Api/movies-service';
import MovieList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log('🚀 ~ movies', movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getDataFromApiTrending();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <div>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </div>
    </section>
  );
};

export default Home;
