import { mdcheck , mdDeleteForever} from "react-icons/md";
export const TodoList = ({data ,checked, onHandleDeleteTodo,onHandelCheckedTodo}) => {
    return (
  <li className="todo-item">
    <span className={checked ?"checkedList" : "notCheckedList"}>{data}</span>
    <button className="check-btn" onCick = {() => onHandelCheckedTodo(data)}>
     <mdCheck />
    </button>
     <button className="delete-btn" onClick= {()  => 
     onHandelDeleteTodo(data)}>
          <mdDeleteForever />
            </button>
                </li>
    );
};