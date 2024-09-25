import { mdcheck , mdDeleteForever} from "react-icons/md";
export const TodoList = ({key,data , onHandleDeleteTodo}) => {
    return (
  <li key={key} className="todo-item">
    <span>{data}</span>
    <button className="check-btn">
     <mdCheck />
    </button>
     <button className="delete-btn" onClick= {()  => 
     onHandelDeleteTodo(data)}>
          <mdDeleteForever />
            </button>
                </li>
    );
};