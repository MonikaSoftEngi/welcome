 import { NavLink } from "react-router-dom";
 
 import "./Card.css"
 
 export const  Card = ({ curMovie}) => {
    const {poster, imdbID} = curMovie;
    return (
        <li className="hero-container">
            <div className="main-container">
            <div className="poster-container">
               <img src={poster} className="poster" alt={imdbID} />
            </div>
            <div className="ticket-container">
                <div className="ticket__content">
                    <NavLink to={`/movie/${imdbID}`}>
                    <button className="ticket__buy-btn">watch now</button>
                    </NavLink>
                </div>
            </div>
            </div>
        </li>
    );
};