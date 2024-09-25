import {  useState } from "react";
import "./Todod.css";
import { TodoFoam} from ".TodoForm";
import { TodoList} from "./TodoList"
import {TodoDate} from "./TodoDate";
export const Todo = () => {
  
 const [task, setTask] = useStste([]);
  const handleFormSubmit = (inputValue) => {
    if (!inptvalue) return;
    if (task.includes(inputValue)) 
      return;
     setTask((prevTask) => [...prevTask, inputValue]);
     };

 // todo handleDeleteTodo function
 const handleDelelteTodo = (value) => {
  console.log(task);
  console.log(value)
  const updateTask = task.filter((curTask) => curTask );
setTask(updatedTask);
};

// todo handelclearTododata funactionality

const handleClearTodoData = () => {
  setTask([]);
}
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate/>
      </header>
      <TodoForm onAddTodo = {handleFormSubmit}/>
      <section className="myUnorddList">
          <ul>
            {task.map((curTask, index) => {
              return <TodoList key={index}data={curTask}
              onHandleDeleTodo={handleDeleteTodo} />;
              })}
           </ul>
          <button className="clear-btn" onclick= {handleClearToDoDeta }  >clear all</button>
        </section>
      </section>
    );
   };
 

