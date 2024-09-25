 import {useState} from "./TodoForm";

 export  const TodoFoam = ({onAddTodo}) => {
    const [inputvalue, setInputvalue] = usestate("");
    const handleInputchange = (value) => {
        setinputvalue(value);
      };
      const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputvalue)
        setInputvalue("");
      }
    return (
<section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
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
          </div>
        </form>
        </section>
    )
  }