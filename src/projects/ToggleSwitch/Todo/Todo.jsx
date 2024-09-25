import { useState } from "react";
import { mdcheck, mdDeleteForever } from "react-icons/md";

import "./Todod.css";
export const Todo = () => {
  const [inputvalue, setInputvalue] = usestate("");
  const [task, setTask] = useStste([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputchange = (value) => {
    setinputvalue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inptvalue) return;

    if (task.includes(inputvalue)) {
      setInputvalue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputvalue]);

    setInputvalue(" ");
    // console.log("Hey");
  };
 
  
  // todo date and time

  useEffect(() => {
    const interval = setInterval(() => {

      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`$ {formatedDate}-$ {formatedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  } ,[]);
  
// todo handleClearTodoData functionality

const handleClearTodoData = () => {
  setTask([]);
// console.log(task);
// console.log(value);
// const updatedTask = task.filter((curTask)=> curTask === value );
// setTask(updatedTask);
};

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          {/* <div>
            <input
              type="text"
              className="todo-input"
              
              autoComplete="off"
              value={inputvalue}
              onchange={(event) => handleInputchange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div> */}
        </form>
        <section className="myUnorddList">
          <ul>
            {/* {task.map((curTask, index) => {
              return (
                <li key={index} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">
                    <mdCheck />
                  </button>
                  <button className="delete-btn" on click= {handelDeleteTodo(curTask)} 
                  >
                    <mdDeleteForever />
                  </button>
                </li>
              );
            })} */}


          </ul>
          <button className="clear-btn" onclick= {handleClearToDoDeta }  >clear all</button>
        </section>
      </section>
    </section>
  );
};
