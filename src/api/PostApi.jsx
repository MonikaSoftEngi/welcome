//import axios from "axios";

//const api = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com",
// });
// get method
// export const getPost = () => {
//     return api.get("/posts");
// };


// delete method
// export const deletePost = (id) => {
//     return api.delete(`/posts/${id}`);
// };

//post method 
// export const postData = (post) => {
//     return api.post("/posts , post");
// }



//put method
// export const UpdateData = (id , Post) => {
// return api.put(`/Post/${id}`,Post);
// };

import axios from "axios";


const api = axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/1eeccfb59edc61c8c944107e",
});

export const CurrencyConverter =(fromCurrency,toCurrency,amount) => {
    return api.get (`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};













