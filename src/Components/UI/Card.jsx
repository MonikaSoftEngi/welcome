//  import { NavLink } from "react-router-dom";

//  import "./Card.css"

//  export const  Card = ({ curMovie}) => {
//     const {poster, imdbID} = curMovie;
//     return (
//         <li className="hero-container">
//             <div className="main-container">
//             <div className="poster-container">
//                <img src={poster} className="poster" alt={imdbID} />
//             </div>
//             <div className="ticket-container">
//                 <div className="ticket__content">
//                     <NavLink to={`/movie/${imdbID}`}>
//                     <button className="ticket__buy-btn">watch now</button>
//                     </NavLink>
//                 </div>
//             </div>
//             </div>
//         </li>
//     );
// };

export const Card = ({movieData}) => {
    const {Poster, imdbID} = movieData;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} classname="Poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <a href={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
