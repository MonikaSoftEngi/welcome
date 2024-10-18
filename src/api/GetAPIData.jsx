

export const getMoviesData =  async ()  => {
 try {
    const response = await fetch(
        "http://www.ombapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    );
const data  = resopnse.json();
return data;
 } catch (error) {
    console.log(error);
 }
};