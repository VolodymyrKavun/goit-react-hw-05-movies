import { Link, useLocation } from 'react-router-dom';
import {
  ContainerList,
  MovieListUl,
  MovieCardItem,
  MovieTitle,
  MovieImage,
} from './MovieList.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ContainerList>
      <MovieListUl>
        {movies.map(({ id, title, backdrop_path }) => (
          <MovieCardItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImage src={`${BASE_URL}${backdrop_path}`} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MovieCardItem>
        ))}
      </MovieListUl>
    </ContainerList>
  );
};

export default MovieList;
