import { password } from "npm";
import "./index.css";
import { useState } from "react";
export const RegistrationFormReact = () => {
  const [user, setuser] = useState({
    firstName:"",
    LastName :"",
    email:"",
    password:"",
    phoneNumber:"",
  });

  
  const handleInputChange = (e) => {
  const { name, value  } = e.target;

  setUser((prev)=>console.log({...prev, [name]: value}));
  };
  
const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    };
    return (
    <>
    <form onSubmit={handleFormSubmit}></form>
      <div className="container">
        <h1>Sign Up</h1>
     <p>please fill in this form to create an account.

     </p>

        <label htmlfor="firstName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter firstName"
          required
          value={user.firstName}
          onChange={handlInputChange}
        />

        <label htmlfor="LastName">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          name="LastName"
          placeholder="Enter LastName"
          required
          value={user.LastName}
          onChange={handlInputChange}
        />

        <label htmlfor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          value={user.email}
          onChange={handlInputChange}
        />

        <label htmlfor="Password">
          <b>Password</b>
        </label>
        <input
          type="Password"
          placeholder="Password"
          name="Password"
          required
          value={user.Password}
          onChange={handlInputChange}
        />

        <label htmlfor="Phone">
          <b>Phone Number</b>
        </label>
        <input
          type="Phone"
          placeholder="1458548414 "
          name="PhoneName"
          required
          value={user.phoneNumber}
          onChange={handlInputChange}
        />

        <p>
          B creating an account you agree to our
          <a href="#" style={{ color: "dodgerblue" }}>
            Terms & privacy
          </a>
        </p>
        <div className="clearfix">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </div>
      <section className="summary"
        style={{textAlign:"center",MarginTop:"30px"}}>

            <p> Hello, my name is 
                <span>
                    {user.firstName}  {user.lastName}
                    </span>
                    . My email adrress is <span>{user.email}</span>and my  phone number is 
                <span>{user.phoneNumber}</span>.
            </p>
      </section>
    </>
  );
};
