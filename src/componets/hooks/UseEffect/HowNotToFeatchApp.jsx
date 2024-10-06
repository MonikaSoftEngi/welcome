import { useState } from "react";
import { useState } from "react";
import "./Project/Pokemon.css";

export const HownotToFetchApi = () => {
  const [apiDada, setApiData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        // setApiData(data);
    })
    .catch((error) => Console.log(error));
  return (
    <div className="container effect-container">
      <ul>
        data:
        {setApiData.map((curData) => {
          return <li key={curData.id}>{curData.title}</li>;
        })}
      </ul>
    </div>
  );
};
