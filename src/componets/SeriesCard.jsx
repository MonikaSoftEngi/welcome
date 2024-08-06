export const SeriesCard = ({data}) => {
  const {  img_url, name, rating, description, cast, genre, watch_url } =
    data;
    const btn_style ={padding:"1.2rem 2.4rem", 
      border:"none",
      fontsize:"1.6rem",
      backgroundcolor: '${rating > 8.5 ? "#7dcea0" : "#f7dc6f"}',
      color:"var(--btn-color)",
      fontweight: "bold",
      cursor: "pointer",};

const ratingClass = rating > 8.5 ? "super_hit" :"averege";


  return (
    <li class Name="card">
      <div>
      <img src={img_url} alt={name} width="40%" hight="40%" />
      </div>
      <div className="card-content">
      <h2>Name: {name} </h2>
      <h3>
        Rating:
        <span 
        className={'rating ${ratingClass}'}>{rating}</span> 
      </h3>
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
