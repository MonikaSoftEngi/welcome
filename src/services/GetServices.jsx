import axios from "axios";

 const api = axios.create({
    baseURL: "https://www.omdbapi.com/",
 });

 export const getMovie = () => {
    return api.get("?=tt389198&apikey=1c12799f&s=titanic&page=1");
 };
 