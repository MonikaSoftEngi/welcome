import {useState} from "react";
import {mdcheck,mdDeleteForever} from "react-icons/md";

import "./Todod.css";
export const Todo = () => {
  const [inputalue, setInputalue] = usestate("");
  const [task, setTask] = useStste([]);
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
  };
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
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
        {
            task.map((curTask, index ) => {
              return (
              <li key={index}className="todo-item">
              <span>{curTask}</span> 
              <button className="check-dtn">
                <mdCheck/>
                </button> 
              <button className="delete-btn">
                <mdDeleteForever/>
                </button> 
              </li>
              );
            })
        }
      </ul>
        </section>
      </section>
    </section>
  );
};
