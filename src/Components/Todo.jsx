import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask } from "../store";
import { useDispatch } from "react-redux";

export const Todo = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.task);

  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };

  const HandleTaskDelete= (id) => {
    return dispatch(deleteTask(id));
  };
//   console.log("react state", state.task);
  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i
            className="fa-regular
                    fa-pen-to-square"
          ></i>
          To-do List:
        </h1>
        <div className="row">
          <from onSubmit={HandleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
          </from>
        </div>
        <ul id="list-container">
          {tasks.map((curTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index}:{curTask}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    // onClick={()=> handleTaskDelete (index)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
