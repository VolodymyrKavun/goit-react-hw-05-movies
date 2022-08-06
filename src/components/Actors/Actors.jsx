const BASE_URL = 'https://image.tmdb.org/t/p/w200';

const Actors = ({ actors }) => {
  return (
    <div>
      <ul>
        {actors.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img src={`${BASE_URL}${profile_path}`} alt={name} />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actors;
