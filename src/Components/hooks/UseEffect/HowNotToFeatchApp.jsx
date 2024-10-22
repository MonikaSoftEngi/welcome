import { useState } from "react";
import { useState } from "react";
import "./Project/Pokemon.css";
import { useEffect } from "react";

export const HownotToFetchApi = () => {
  const [apiDada, setApiData] = useState([null]);
  const [Loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const feachPokkemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //       setLoading(false);
  //     })

  //     .catch((error) => {
  //       Console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };
  const fetchPokemon = async () => {
    try {
   const res =await fetch(API);
   const data = await res.json();
   setPokemon(dada);
   setLoading(false);
    }catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(Pokemon);

  if (Loading) 
    return (
<div>
    <h1>
        Loading....
    </h1>
</div>
);
   if (error)
    return (
<div>
<h1>Error: {error.message} </h1>
</div>
);

  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="Pokemon-card">
          <figure>
            <img
              src={Pokemon.sprites.other.dream_world.front_default}
              alt={Pokemon.name}
              className="pokemon-image"
            />
            </figure>
            <h1>{Pokemon.name}</h1>
           <div className="grid-three-cols">
            <p className="Pokemon-info">
                Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
                Weight: <span> {pokemon.Weight} </span>
            </p>
            <p className="pokemon-info">
                speed: <span>{pokeman.stats[5].base-stat} </span>
            </p>
           </div>
        </li>
      </ul>
    </section>
  );
};
