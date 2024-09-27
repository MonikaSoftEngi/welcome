import { useState } from "react";
import "../src/projectsTodo.css";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [task, setTasks] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const handleInputChange = (value) => {
    setInputvalue(value);
  };
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (!inputValue) return;
  if (taskitems.includes(value)) {
    setInputValue("");
    return;
  }
  console.log(task);

  // todo Add Date features  also
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>
      <section className="myUnOrderList">
        <ul className="todo-List">
          {Task.map((curTask, index) => {
            return <TodoLists key={index} data={curTask} />;
          })}
        </ul>
      </section>
    </section>
  );
};
const TodoList = ({ data }) => {
  return (
    <li className="todo-item">
      <span>{data}</span>
      <input type="text" />
      <button>
        <mdDeleteForever clasName="delete-btn" />
      </button>
    </li>
  );
};
