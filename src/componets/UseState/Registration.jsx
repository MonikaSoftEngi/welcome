import "./index.css";
import { useState } from "react";
export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
  const { name, value  } = e.target;

  switch (name) {
    case "firstName":
    setFirstName(value);
    break;


    case "LastName":
    setLastName(value);
    break;

    case "email":
        setEmail(value);
        break;

        case "Password":
            setPassword(value);
            break;

            case "Phone":
                setPhoneNumber(value);
                break;
            }
        };

const handleFormSubmit = () => {
    event.preventDefault ();
    const formData = {
        firstName,
        LastName,
        email,
        Password,
        PhoneNumber,
    };
    console.log(formData

    )
};


  return (
    <>
    <form onSubmit={handleFormSubmit}></form>
      <div clssNmae="container">
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
          value={firstName}
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
          value={LastName}
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
          value={email}
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
          value={Password}
          onChange={handlInputChange}
        />

        <label htmlfor="Phone">
          <b>Phone Number</b>
        </label>
        <input
          type="Phone"
          placeholder="1458548414 "
          name="Phone"
          required
          value={phoneNumber}
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
                    {firstName}  {lastName}
                    </span>
                    . My email adrress is <span>{email}</span>and my  phone number is 
                <span>{phoneNumber}</span>.
            </p>
      </section>
    </>
  );
};
