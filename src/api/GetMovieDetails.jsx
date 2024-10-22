// import { useParams } from "react-router-dom";

export const getMovieDetails =  async ({ Params })  => {
    console.log(Params);
     const id = Params.movieID;
    try {
       const response = await fetch(
           `http://www.ombapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
       );
   const data  = response.json();
   return data;
    } catch (error) {
       
        console.log(error);
    }
    };