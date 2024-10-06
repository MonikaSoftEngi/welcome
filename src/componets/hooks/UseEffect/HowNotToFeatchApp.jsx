import { useState } from "react";
import { useState } from "react";
import "./Project/Pokemon.css";
import { useEffect } from "react";

export const HownotToFetchApi = () => {
  const [apiDada, setApiData] = useState([null]);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

   const  feachPokkemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
    setApiData(data);
      })

  .catch((error) => Console.log(error));
   }

  useEffect(() => {
    fetchPokemon()
},[]);

console.log(apiData);
if (apiData)  {

}


  return (
<section className="container">
    <header>
        <h1>Lets Catch Pokemon</h1>
    </header>
    <ul className="card-demo">
        <li className="Pokemon-card">
          <figure>
            <img
            src={apiData.sprites.other.dream_world.front_default}
            alt={apiData.name}
            className="pokemon-image"
            />
            <h1>{apiData.name}</h1>
          </figure>
        </li>
    </ul>
</section>
 );
};
