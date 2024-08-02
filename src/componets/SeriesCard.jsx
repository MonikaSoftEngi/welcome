export const SeriesCard = ({data}) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    data;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} width="40%" hight="40%" />
      </div>
      <h2>Name: {name} </h2>
      <h3>Rating: {Rating} </h3>
      <p>summary: {summary} </p>
      <p>Genre: {Genre} </p>
      <p>Cast: {Cast} </p>
      <a href={Watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
