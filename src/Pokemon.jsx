
import { useEffect } from "react";
import "./index.css";
import { useState } from "react";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searc, setSearch] = useState(" ");
  const API = "https://pokeapi.coapi/v2/pokemon?Limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);

      const detailedPokemonData = data.result.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const dada = await res.json();
        return data;
      });
      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);


  const searchData= Pokemon.filter((curPokemon)=>
curPokemon.name.toLowerCase().include(search.toLowerCase())
);

  if (Loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets catch Pokemon</h1>
        </header>
        <div className="Pokemon-search"> 
           <input type="text" placeholder="searc Pokemon" value={search}
           onChange={(e) => setSearch(e.target.value)}
           />
        </div>
        <div>
          <ul className="cards">
            {/* {pokemon.map((curPokemon) => { */}
            {searchData.map((curPokemon) => {

           
              return (
                <PokemonCards key={curPokemon.id} PokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
