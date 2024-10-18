 import { useLoaderData} from "react-router-dom";
import { Card } from "../componets/UI/Card";


export const Movie = () => {
    const moviesData = useLoaderData();
console.log(MoviesData);
     <h1>Movie Page</h1>;
     return(
        <>
        <ul className="container rid grid-four--cols">
        {moviesData && 
         moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID}  curMovie= {curMovie} />;
        })}
        </ul>
        </>
     );
};
