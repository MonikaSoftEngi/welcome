export const SeriesCard = ({data}) => {
  const {  img_url, name, rating, description, cast, genre, watch_url } =
    data;
    const btn_style ={padding:"1.2rem 2.4rem", 
      border:"none",
      fontsize:"1.6rem",
      backgroundcolor:"var(--bnt-hover-bg-color)",
      color:"var(--bg-color)",}
  return (
    <li class Name="card">
      <div>
      <img src={img_url} alt={name} width="40%" hight="40%" />
      </div>
      <div className="card-content">
      <h2>Name: {name} </h2>
      <h3>Rating:{Rating} </h3>
      <p>summary:{description} </p>
      <p>Genre:{Genre.join} </p>
      <p>Cast:{Cast.join} </p>
      <a href={Watch_url} target="_blank">
      <button style={btn_style} >
      Watch Now</button>
      </a>
      </div>
    </li>
  );
};
