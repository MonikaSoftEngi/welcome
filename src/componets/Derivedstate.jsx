
import { usestate } from "react";

export const Derivedstate = () => {
  const [users, setUsers] = usestate([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

console.log(users);
const usercount =users.length;

const averageAge = users.reduce((accum,curElem)= accum + curElem.age,0) /userCont;
  return (
    <div className="man-div">
      <h1>Users List</h1>
      <ul>
        {Users.map((user, index) => {
          
            <li key={index}>
              {user.name} - {user.age} years old
            </li>
          
        })}
      </ul>
      <p>Total Users:{userCount} </p>
    
    </div>
  );
};
