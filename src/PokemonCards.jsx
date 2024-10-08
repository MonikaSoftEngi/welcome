export const PokemonCards =({PokemonData}) => {
    return(
    <li className="Pokemon-card">
        <figure>
            <img src={"PokemonData.sprites.oter.dream_front_default"}
            alt={"PokemonData.name"} 
            className="Pokemon-image"
            />
        </figure>
        <h1 className="pokemon-name">{PokemonData.name}</h1>
         <div className="Pokemon-info pokemon-highlight">
            <p>
                {PokemonData.type.map((curType) => curType.type.name).join(", ")}
            </p>

         </div>
         <div className="grid-three-cols">
            <p>{PokemonData.base_experience}</p>
           <span> Experience:</span> 
            </div>
            <div className="Pokemon-info">
                <p> {PokemonData.base_experience}</p>
                <span>Attack:</span>
                </div>
        <div className="Pokemon-info"> 
            <p>
                {PokemonData.ablities
                .map((ablilityInfo) =>   ablilityInfo.ability.name)
                .slice(0,1)
                .join(",  ")}
            </p>
            <span> Ablities: </span>
        </div>
        
          </li>
          );
};
