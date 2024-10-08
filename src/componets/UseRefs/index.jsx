import "./index.css";
import { useRef } from "react";
 export const Useref = () => {
// const userName = document.getElementById("username");
// const password = document.getElementById("password");
 

const userName = useRef(null);
const password = useRef(null);
 console.log(username);

  const handleFormSubmit = (e) => {
e.preventDefault();
console.log(username.current.value,passord.current.value);
 
 };

return (
 <form onSubmit={handelFormSubmit}> 
    <input  type="text" id="username" ref="username"/>
    <br/>
    <input  type="text" id="password" ref="password" />
    <br/>
    <button>Submit</button>
 </form>
 )
};