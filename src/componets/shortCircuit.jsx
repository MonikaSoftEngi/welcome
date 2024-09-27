import "./Hooks.css";
import {useState} from "react";
const ShortCircuitExample = ()  =>  {
    const[isLoggedIn,setIsLoggedIn] = useState(true)
    const [user,setUser] = useState("");
    return (
        <section className="container short-container">
<h1>Welcome to the ShortCurcuit Evaluation</h1>
{isLoggedIn && <p>You are Logged in!</p>}
       
       {user ?  `Hello ${user}`:"plz Log in!"}
       <div className="grid-three-cols">
       <button onClick={() => setIsLoggedIn(!isLoggedIn) }>Toggle Login State</button>

       <button onClick={() =>setUser("vinod thapa")}>Set User</button>
       <button onClick={() => setUser("")}>Clear User</button>
       </div>
        </section>
    );
};

export default ShortCircuitExample;