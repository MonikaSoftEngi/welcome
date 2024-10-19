
export const getMoviesDetails =  async ({Params})  => {
     console.log(Params);
     const id =params.MovieID;
    try {
       const response = await fetch(
           `http://www.ombapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
       );
   const data  = resopnse.json();
   return data;
    } catch (error) {
       
       console.log(error);
    }
   };