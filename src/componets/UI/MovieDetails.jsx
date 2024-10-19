import { NavLink, useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
//  const params = useParams();
// console.log(params);
useLoaderData();
console.log(MovieData);


// const { Actor, Poster,Title, Type,Polt,BoxOffice,imdbID }
return (
    <li className="hero-container hero-movie--container" >
  <div className="main-container">
<div className="poster-container">
<img src= {poster} className ="poster" alt={Title} />
 </div>
<div className="ticket-container">
 <div className="ticket__container">
         <h4 className="ticket__movie-title">{Title}</h4>
         <p>{Plot}</p>
   <p className="ticket__current-price">Type:{}</p>
   <p className="ticket__current-price">Type:</p>
   <button className="ticket__buy-btn">Watch now</button>
    </div>
</div>
            </div>
        </li>
    );
};




