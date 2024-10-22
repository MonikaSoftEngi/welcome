import { useState} from "react"
import "../Hooks.css";

const controlledForm = () => {
  const [name, setName]= useState("");

  const handleChange = (event ) => {
    setName(event.target.value);
  };


 const handleSubmit = (event) => {
      event.preventDfault();

  //     const datavalue = document.querySelector("#inputName") value;
  //     console.log(datavalue);

  console.log(name);
   };

  return (
     <section className="container state-container">
      <h1>unControlled Componet</h1>
      <foam onSubmit={handleSubmit}>
        <lable>
          Name:
          <input id="inputName" name="name" type="text" 
           value="monika"
           onChange={handleChange} />
        </lable>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </foam>
    </section>
  );
};
