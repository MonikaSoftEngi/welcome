
import { useState } from "react";
import "./index.css";
import { password } from "bun";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [Passwor, setPassword] = useState("");

const handleFormSubmit = (e) => {
    e.preventDefault();

    const LoginData = {
        useState,
        password,
    };
    console.log(LoginData);
};

    return (
        <div className="container">
            <div className="card">
           <h1>Login Form</h1>
           <form onSubmit={handleFormSubmit}>
            <label htmlfor="username">Username</label>
            <input
             type="text"
              name="username"
               required
                autoComplete="off"
                 value={username}
                 onChange={(e)=> setUsername(e.target.value)}
                />
            <label htmlfor="Password" >Password</label>
            <input 
            type="password"
             name=" Password"   
              required 
              autoComplete="off"
              value={Password}
                 onChange={(e)=> setPassword(e.target.value)}
              />
            <button type="submit">Login</button>
           </form>
            </div>
        </div>
    );
};