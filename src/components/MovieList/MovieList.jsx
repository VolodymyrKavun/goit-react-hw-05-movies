const MovieList = ({ movies }) => {
  console.log('🚀 ~ movies in MoviesList', movies);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
