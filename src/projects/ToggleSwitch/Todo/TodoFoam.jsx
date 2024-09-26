 import {useState} from "./TodoForm";

 export  const TodoFoam = ({onAddTodo}) => {
    const [inputvalue, setInputvalue] = usestate({});

    const handleInputchange = (value) => {
        setinputvalue({id: value, content:value, checked: false});
    };
      const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputvalue)
        setInputvalue({id:"",content:"", checked:false});
      };
    return (
<section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              
              autoComplete="off"
              value={inputvalue.content}
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